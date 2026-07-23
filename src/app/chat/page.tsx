"use client";
import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./Chat.module.css";
import { Send, Bot, MapPin, Globe, Loader2, Search, X, Check } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface Message {
  id: string;
  role: "user" | "ai";
  content: string;
}

const GREETINGS = [
  "Hello! I'm your SpatialCare AI assistant. I can help you understand BHCPF coverage and healthcare policies. Where are you located?",
  "Howfa! I be your SpatialCare AI assistant. I fit help you understand BHCPF coverage and healthcare policies. Where you dey?",
  "Sannu! Ni ne mataimakin ku na SpatialCare AI. Zan iya taimaka muku fahimtar tsarin BHCPF da manufofin kiwon lafiya. A ina kuke?",
  "Nnọọ! Abụ m onye enyemaka SpatialCare AI gị. Enwere m ike inyere gị aka ịghọta mkpuchi BHCPF na iwu nlekọta ahụike. Ebee ka ịnọ?",
  "Bawo! Emi ni oluranlowo SpatialCare AI rẹ. Mo le ṣe iranlọwọ fun ọ lati ni oye nipa BHCPF ati awọn eto ilera. Nibo ni o wa?"
];

function SearchModal({ 
  isOpen, 
  onClose, 
  title, 
  items, 
  onSelect, 
  selectedValue 
}: { 
  isOpen: boolean, 
  onClose: () => void, 
  title: string, 
  items: string[], 
  onSelect: (val: string) => void, 
  selectedValue: string 
}) {
  const [search, setSearch] = useState("");
  
  // Reset search when modal opens
  useEffect(() => {
    if (isOpen) setSearch("");
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredItems = items.filter(item => item.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>{title}</h2>
          <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>
        <div className={styles.modalSearch}>
          <Search size={16} className={styles.searchIcon} />
          <input 
            type="text" 
            className={styles.searchInput} 
            placeholder={`Search ${title.toLowerCase()}...`}
            value={search}
            onChange={e => setSearch(e.target.value)}
            autoFocus
          />
        </div>
        <div className={styles.modalList}>
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <button 
                key={item}
                className={`${styles.modalItem} ${selectedValue === item ? styles.active : ''}`}
                onClick={() => {
                  onSelect(item);
                  onClose();
                }}
              >
                {item}
                {selectedValue === item && <Check size={16} />}
              </button>
            ))
          ) : (
            <div className={styles.emptyState}>No results found</div>
          )}
        </div>
      </div>
    </div>
  );
}

function ChatContent() {
  const searchParams = useSearchParams();
  const paramState = searchParams.get("state") || "";
  const paramLga = searchParams.get("lga") || "";
  const paramWard = searchParams.get("ward") || "";
  const paramPrompt = searchParams.get("prompt") || "";

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "ai",
      content: GREETINGS[0]
    }
  ]);
  const [input, setInput] = useState(paramPrompt);
  const [isLoading, setIsLoading] = useState(false);
  
  const [context, setContext] = useState({
    language: "Auto",
    state: paramState,
    lga: paramLga,
    ward: paramWard
  });

  const [statesList, setStatesList] = useState<string[]>([]);
  const [lgasList, setLgasList] = useState<string[]>([]);
  const [wardsList, setWardsList] = useState<string[]>([]);
  
  const [activeModal, setActiveModal] = useState<"language" | "state" | "lga" | "ward" | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const contextBarRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  useEffect(() => {
    if (messages.length > 1 || isLoading) {
      scrollToBottom();
    }
  }, [messages, isLoading]);

  // Auto-scroll context bar on mobile when new options become available
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768 && contextBarRef.current && context.state) {
      setTimeout(() => {
        if (contextBarRef.current) {
          contextBarRef.current.scrollTo({ left: contextBarRef.current.scrollWidth, behavior: 'smooth' });
        }
      }, 150);
    }
  }, [context.state, context.lga]);

  // Cycle greetings automatically when there is only the first message
  useEffect(() => {
    if (messages.length > 1) return;
    const interval = setInterval(() => {
      setMessages(prev => {
        if (prev.length !== 1) return prev;
        const currentIndex = GREETINGS.indexOf(prev[0].content);
        const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % GREETINGS.length;
        return [{ ...prev[0], content: GREETINGS[nextIndex] }];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [messages.length]);

  // Fetch States on mount
  useEffect(() => {
    fetch("/api/locations/states")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setStatesList(data);
      })
      .catch(console.error);
  }, []);

  // Fetch LGAs when state changes
  useEffect(() => {
    if (context.state) {
      fetch(`/api/locations/lgas?state=${encodeURIComponent(context.state)}`)
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) setLgasList(data);
        })
        .catch(console.error);
    } else {
      setLgasList([]);
    }
  }, [context.state]);

  // Fetch Wards when LGA changes
  useEffect(() => {
    if (context.state && context.lga) {
      fetch(`/api/locations/wards?state=${encodeURIComponent(context.state)}&lga=${encodeURIComponent(context.lga)}`)
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) setWardsList(data);
        })
        .catch(console.error);
    } else {
      setWardsList([]);
    }
  }, [context.state, context.lga]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    
    // Add user message
    const newMsg: Message = { id: Date.now().toString(), role: "user", content: userMessage };
    setMessages(prev => [...prev, newMsg]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          language: context.language,
          state: context.state || "Unknown",
          lga: context.lga || "Unknown",
          ward: context.ward || "Unknown"
        })
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.text();
      
      let aiText = data;
      try {
         const parsed = JSON.parse(data);
         aiText = parsed.answer || parsed.response || parsed.message || data;
      } catch (e) {
         if (typeof aiText === 'string' && aiText.startsWith('"') && aiText.endsWith('"')) {
            aiText = aiText.slice(1, -1);
         }
      }
      
      setMessages(prev => [...prev, { id: Date.now().toString(), role: "ai", content: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: "ai", 
        content: "Sorry, I'm having trouble connecting to the network right now. Please try again later." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const languages = ["Auto Language", "English", "Pidgin", "Hausa", "Yoruba", "Igbo"];

  return (
    <main className={styles.mainWrapper}>
      <div className={styles.chatCard}>
        {/* Messages */}
        <div className={styles.messagesArea}>
          <div className={styles.centerContainer}>
          {messages.map((msg) => (
            <div key={msg.id} className={`${styles.messageWrapper} ${msg.role === 'user' ? styles.userWrapper : styles.aiWrapper}`}>
              {msg.role === 'ai' && (
                <div className={styles.msgAvatar}><Bot size={18} /></div>
              )}
              <div className={`${styles.message} ${msg.role === 'user' ? styles.userMessage : styles.aiMessage}`}>
                {msg.role === 'ai' ? (
                  <ReactMarkdown
                    components={{
                      a: ({ node, ...props }) => (
                        <a {...props} target="_blank" rel="noopener noreferrer" style={{ color: '#3B82F6', textDecoration: 'underline' }} />
                      ),
                      p: ({ node, ...props }) => (
                        <p {...props} style={{ marginBottom: '12px', marginTop: 0 }} />
                      ),
                      ul: ({ node, ...props }) => (
                        <ul {...props} style={{ paddingLeft: '20px', marginBottom: '12px', marginTop: 0 }} />
                      ),
                      li: ({ node, ...props }) => (
                        <li {...props} style={{ marginBottom: '4px' }} />
                      ),
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                ) : (
                  msg.content
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className={`${styles.messageWrapper} ${styles.aiWrapper}`}>
              <div className={styles.msgAvatar}><Bot size={18} /></div>
              <div className={`${styles.message} ${styles.aiMessage}`}>
                <div className={styles.typingIndicator}>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className={styles.inputArea}>
          <div className={styles.centerContainer}>
          <div className={styles.contextBar} ref={contextBarRef}>
            <button 
              className={styles.contextButton} 
              onClick={() => setActiveModal("language")}
            >
              <Globe className={styles.contextIcon} size={16} />
              <span style={{ paddingLeft: '8px' }}>
                {context.language === "Auto" ? "Auto Language" : context.language}
              </span>
            </button>
            
            <button 
              className={styles.contextButton} 
              onClick={() => setActiveModal("state")}
            >
              <MapPin className={styles.contextIcon} size={16} />
              <span style={{ paddingLeft: '8px' }}>{context.state || "Select State"}</span>
            </button>
            
            <button 
              className={styles.contextButton} 
              onClick={() => setActiveModal("lga")}
              disabled={!context.state}
            >
              <MapPin className={styles.contextIcon} size={16} />
              <span style={{ paddingLeft: '8px' }}>{context.lga || "Select LGA"}</span>
            </button>

            <button 
              className={styles.contextButton} 
              onClick={() => setActiveModal("ward")}
              disabled={!context.lga}
            >
              <MapPin className={styles.contextIcon} size={16} />
              <span style={{ paddingLeft: '8px' }}>{context.ward || "Select Ward"}</span>
            </button>
          </div>

          <div className={styles.inputWrapper}>
            <textarea
              className={styles.chatInput}
              placeholder="Ask about BHCPF coverage, eligibility, or facilities..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              rows={1}
            />
            <button 
              className={styles.sendButton} 
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
            >
              {isLoading ? <Loader2 size={20} className={styles.spinner} /> : <Send size={20} />}
            </button>
          </div>
          <div className={styles.disclaimer}>
            AI can make mistakes. Please verify important information with official sources.
          </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <SearchModal 
        isOpen={activeModal === "language"} 
        onClose={() => setActiveModal(null)}
        title="Language"
        items={languages}
        selectedValue={context.language === "Auto" ? "Auto Language" : context.language}
        onSelect={(val) => setContext({ ...context, language: val === "Auto Language" ? "Auto" : val })}
      />

      <SearchModal 
        isOpen={activeModal === "state"} 
        onClose={() => setActiveModal(null)}
        title="State"
        items={statesList}
        selectedValue={context.state}
        onSelect={(val) => setContext({ ...context, state: val, lga: "", ward: "" })}
      />

      <SearchModal 
        isOpen={activeModal === "lga"} 
        onClose={() => setActiveModal(null)}
        title="LGA"
        items={lgasList}
        selectedValue={context.lga}
        onSelect={(val) => setContext({ ...context, lga: val, ward: "" })}
      />

      <SearchModal 
        isOpen={activeModal === "ward"} 
        onClose={() => setActiveModal(null)}
        title="Ward"
        items={wardsList}
        selectedValue={context.ward}
        onSelect={(val) => setContext({ ...context, ward: val })}
      />
    </main>
  );
}

export default function ChatPage() {
  return (
    <Suspense fallback={<main className={styles.mainWrapper}><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--gray-500)' }}>Loading chat...</div></main>}>
      <ChatContent />
    </Suspense>
  );
}
