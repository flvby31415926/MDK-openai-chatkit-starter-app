import React, { useState, useRef, useEffect } from 'react';

export default function CustomChatUI() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Готовы помочь сейчас по любому мебельному вопросу' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      
      if (data.reply) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: 'Помилка з\'єднання' }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Помилка з\'єднання' }]);
    }
    
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '90vh',
      maxWidth: '800px',
      margin: '0 auto',
      background: '#f5f5f5',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    }}>
      {/* Заголовок */}
      <div style={{
        padding: '20px',
        background: '#44aa00',
        color: 'white',
        fontWeight: '600',
        fontSize: '18px',
        borderRadius: '24px 24px 0 0'
      }}>
        Мебельний Дім Колобових
      </div>

      {/* Сообщения */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            display: 'flex',
            justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start'
          }}>
            <div style={{
              maxWidth: '70%',
              padding: '12px 16px',
              borderRadius: '24px',
              background: msg.role === 'user' ? '#44aa00' : 'white',
              color: msg.role === 'user' ? 'white' : '#2d7000',
              fontSize: '15px',
              lineHeight: '1.5',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start'
          }}>
            <div style={{
              padding: '12px 16px',
              borderRadius: '24px',
              background: 'white',
              color: '#2d7000',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}>
              <div style={{
                display: 'flex',
                gap: '4px'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#44aa00',
                  animation: 'bounce 1.4s infinite ease-in-out both',
                  animationDelay: '-0.32s'
                }} />
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#44aa00',
                  animation: 'bounce 1.4s infinite ease-in-out both',
                  animationDelay: '-0.16s'
                }} />
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#44aa00',
                  animation: 'bounce 1.4s infinite ease-in-out both'
                }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Поле ввода */}
      <div style={{
        padding: '20px',
        background: 'white',
        borderTop: '1px solid #e0e0e0'
      }}>
        <div style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-end'
        }}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Напишите свой вопрос"
            disabled={loading}
            rows={1}
            style={{
              flex: 1,
              padding: '12px 16px',
              border: '2px solid #e0e0e0',
              borderRadius: '24px',
              fontSize: '15px',
              fontFamily: 'system-ui, sans-serif',
              resize: 'none',
              outline: 'none',
              transition: 'border-color 0.2s',
              background: '#fafafa'
            }}
            onFocus={(e) => e.target.style.borderColor = '#44aa00'}
            onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
          />
          <button
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            style={{
              padding: '12px 24px',
              background: loading || !input.trim() ? '#ccc' : '#44aa00',
              color: 'white',
              border: 'none',
              borderRadius: '24px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              if (!loading && input.trim()) {
                e.target.style.background = '#3a9000';
                e.target.style.transform = 'scale(1.02)';
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.background = loading || !input.trim() ? '#ccc' : '#44aa00';
              e.target.style.transform = 'scale(1)';
            }}
          >
            Відправити
          </button>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { 
            transform: scale(0);
          } 
          40% { 
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
