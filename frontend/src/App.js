import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div className="app">
      <h1>🚀 Prep Tracker</h1>
      <p className="subtitle">
        Track your company-wise preparation roadmap
      </p>

      {/* ===== SELECT COMPANY ===== */}
      {!selectedCompany && (
        <div>
          <h3>Select a Company</h3>
          <div className="company-grid">
            {companies.map((company) => (
              <button
                key={company.name}
                className="company-card"
                onClick={() => {
                  setSelectedCompany(company);
                  setSelectedSubject(null);
                  setSelectedTopic(null);
                }}
              >
                {company.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ===== SUBJECT PAGE ===== */}
      {selectedCompany && !selectedSubject && (
        <div className="details-page">
          <button
            className="back-btn"
            onClick={() => setSelectedCompany(null)}
          >
            ← Back
          </button>

          <h2>{selectedCompany.name} Preparation</h2>

          <div className="company-grid">
            {selectedCompany.subjects.map((subject) => (
              <button
                key={subject.name}
                className="company-card"
                onClick={() => {
                  setSelectedSubject(subject);
                  setSelectedTopic(null);
                }}
              >
                {subject.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ===== TOPIC PAGE ===== */}
      {selectedSubject && !selectedTopic && (
        <div className="details-page">
          <button
            className="back-btn"
            onClick={() => setSelectedSubject(null)}
          >
            ← Back
          </button>

          <h2>{selectedSubject.name}</h2>

          <div className="company-grid">
            {selectedSubject.topics.map((topic) => (
              <button
                key={topic.title}
                className="company-card"
                onClick={() => setSelectedTopic(topic)}
              >
                {topic.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ===== TOPIC DETAILS ===== */}
      {selectedTopic && (
        <div className="details-page">
          <button
            className="back-btn"
            onClick={() => setSelectedTopic(null)}
          >
            ← Back
          </button>

          <h2>{selectedTopic.title}</h2>
          <p>
            <strong>Study Notes:</strong> {selectedTopic.notes}
          </p>

          <a
            href={selectedTopic.tutorial}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              marginTop: "15px",
              padding: "10px 20px",
              backgroundColor: "#4facfe",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Open Tutorial
          </a>
        </div>
      )}
    </div>
  );
}

/* ===== YOUR COMPANY DATA BELOW ===== */

const companies = [
  {
    name: "Google",
    subjects: [
      {
        name: "Data Structures & Algorithms",
        topics: [
          { title: "Arrays", notes: "Master traversal, prefix sums, sliding window.", tutorial: "https://www.geeksforgeeks.org/array-data-structure/" },
          { title: "Linked List", notes: "Understand insertion, deletion, reversal.", tutorial: "https://www.geeksforgeeks.org/data-structures/linked-list/" },
          { title: "Stacks", notes: "LIFO structure, applications like parentheses check.", tutorial: "https://www.geeksforgeeks.org/stack-data-structure/" },
          { title: "Queues", notes: "FIFO structure, circular queue, deque.", tutorial: "https://www.geeksforgeeks.org/queue-data-structure/" },
          { title: "Trees", notes: "Binary tree, BST, traversals.", tutorial: "https://www.geeksforgeeks.org/binary-tree-data-structure/" },
          { title: "Graphs", notes: "BFS, DFS, shortest path algorithms.", tutorial: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/" }
        ]
      },
      {
        name: "System Design",
        topics: [
          { title: "Scalability", notes: "Horizontal vs vertical scaling.", tutorial: "https://www.youtube.com/watch?v=UzLMhqg3_Wc" },
          { title: "Load Balancing", notes: "Distribute traffic efficiently.", tutorial: "https://www.youtube.com/watch?v=K0Ta65OqQkY" },
          { title: "Caching", notes: "Redis, CDN, cache invalidation.", tutorial: "https://www.youtube.com/watch?v=5N1KkK8HfEo" },
          { title: "Database Sharding", notes: "Horizontal partitioning strategy.", tutorial: "https://www.youtube.com/watch?v=5faMjKuB9bc" },
          { title: "Microservices", notes: "Service communication patterns.", tutorial: "https://www.youtube.com/watch?v=y8OnoxKotPQ" },
          { title: "CAP Theorem", notes: "Consistency, Availability, Partition tolerance.", tutorial: "https://www.youtube.com/watch?v=Jr5dL6nM5Zg" }
        ]
      },
      {
        name: "Core Subjects",
        topics: [
          { title: "Operating Systems", notes: "Process, threads, scheduling.", tutorial: "https://www.geeksforgeeks.org/operating-systems/" },
          { title: "DBMS", notes: "Normalization, indexing, transactions.", tutorial: "https://www.geeksforgeeks.org/dbms/" },
          { title: "Computer Networks", notes: "OSI model, TCP/IP.", tutorial: "https://www.geeksforgeeks.org/computer-network-tutorials/" },
          { title: "OOPS", notes: "Encapsulation, inheritance, polymorphism.", tutorial: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/" },
          { title: "SQL", notes: "Joins, subqueries, indexing.", tutorial: "https://www.geeksforgeeks.org/sql-tutorial/" },
          { title: "Concurrency", notes: "Threads, race conditions, synchronization.", tutorial: "https://www.geeksforgeeks.org/concurrency-in-operating-system/" }
        ]
      }
    ]
  },
  {
    name: "Amazon",
    subjects: [
      {
        name: "Data Structures & Algorithms",
        topics: [
          { title: "Arrays & Strings", notes: "Two pointer and sliding window patterns.", tutorial: "https://leetcode.com/" },
          { title: "Hashing", notes: "HashMap optimization problems.", tutorial: "https://leetcode.com/" },
          { title: "Binary Trees", notes: "DFS, BFS, recursion.", tutorial: "https://leetcode.com/" },
          { title: "Dynamic Programming", notes: "Memoization and tabulation.", tutorial: "https://leetcode.com/" },
          { title: "Greedy", notes: "Activity selection problems.", tutorial: "https://leetcode.com/" },
          { title: "Graphs", notes: "Topological sort, shortest path.", tutorial: "https://leetcode.com/" }
        ]
      },
      {
        name: "Low Level Design",
        topics: [
          { title: "SOLID Principles", notes: "Clean architecture design.", tutorial: "https://www.youtube.com/watch?v=rtmFCcjEgEw" },
          { title: "Design Patterns", notes: "Singleton, Factory, Observer.", tutorial: "https://www.youtube.com/watch?v=v9ejT8FO-7I" },
          { title: "Class Diagrams", notes: "UML basics.", tutorial: "https://www.youtube.com/watch?v=UI6lqHOVHic" },
          { title: "API Design", notes: "RESTful design principles.", tutorial: "https://www.youtube.com/watch?v=lsMQRaeKNDk" },
          { title: "Error Handling", notes: "Robust exception strategies.", tutorial: "https://www.youtube.com/" },
          { title: "Testing", notes: "Unit and integration testing.", tutorial: "https://www.youtube.com/" }
        ]
      },
      {
        name: "Leadership Principles",
        topics: [
          { title: "Customer Obsession", notes: "User-first thinking.", tutorial: "https://www.amazon.jobs/en/principles" },
          { title: "Ownership", notes: "Taking responsibility.", tutorial: "https://www.amazon.jobs/en/principles" },
          { title: "Invent & Simplify", notes: "Innovation mindset.", tutorial: "https://www.amazon.jobs/en/principles" },
          { title: "Bias for Action", notes: "Move fast decision making.", tutorial: "https://www.amazon.jobs/en/principles" },
          { title: "Dive Deep", notes: "Data-driven thinking.", tutorial: "https://www.amazon.jobs/en/principles" },
          { title: "Deliver Results", notes: "Execution excellence.", tutorial: "https://www.amazon.jobs/en/principles" }
        ]
      }
    ]
  },
  {
    name: "Microsoft",
    subjects: [
      {
        name: "DSA",
        topics: [
          { title: "Recursion", notes: "Understand call stack.", tutorial: "https://leetcode.com/" },
          { title: "Backtracking", notes: "N-Queens and subset problems.", tutorial: "https://leetcode.com/" },
          { title: "Binary Search", notes: "Divide and conquer technique.", tutorial: "https://leetcode.com/" },
          { title: "Trie", notes: "Prefix tree applications.", tutorial: "https://leetcode.com/" },
          { title: "Heap", notes: "Priority queues.", tutorial: "https://leetcode.com/" },
          { title: "Graph Algorithms", notes: "Dijkstra and MST.", tutorial: "https://leetcode.com/" }
        ]
      },
      {
        name: "System Design",
        topics: [
          { title: "Distributed Systems", notes: "Concepts of distributed computing.", tutorial: "https://youtube.com" },
          { title: "Caching", notes: "Performance improvement strategies.", tutorial: "https://youtube.com" },
          { title: "Message Queues", notes: "Kafka basics.", tutorial: "https://youtube.com" },
          { title: "Rate Limiting", notes: "Prevent abuse.", tutorial: "https://youtube.com" },
          { title: "Database Scaling", notes: "Sharding vs replication.", tutorial: "https://youtube.com" },
          { title: "Consistency Models", notes: "Strong vs eventual consistency.", tutorial: "https://youtube.com" }
        ]
      },
      {
        name: "Core CS",
        topics: [
          { title: "OS", notes: "Deadlocks, scheduling.", tutorial: "https://gfg.com" },
          { title: "DBMS", notes: "ACID properties.", tutorial: "https://gfg.com" },
          { title: "CN", notes: "Routing protocols.", tutorial: "https://gfg.com" },
          { title: "OOPS", notes: "Design fundamentals.", tutorial: "https://gfg.com" },
          { title: "C#", notes: "Basics and OOP concepts.", tutorial: "https://youtube.com" },
          { title: "Azure Basics", notes: "Cloud fundamentals.", tutorial: "https://youtube.com" }
        ]
      }
    ]
  },
  {
    name: "Pinterest",
    subjects: [
      {
        name: "Frontend Engineering",
        topics: [
          { title: "React Advanced", notes: "Hooks and performance optimization.", tutorial: "https://react.dev/" },
          { title: "State Management", notes: "Redux & Context API.", tutorial: "https://redux.js.org/" },
          { title: "Performance Optimization", notes: "Lazy loading and memoization.", tutorial: "https://youtube.com" },
          { title: "Accessibility", notes: "ARIA roles.", tutorial: "https://youtube.com" },
          { title: "SEO", notes: "Meta tags and indexing.", tutorial: "https://youtube.com" },
          { title: "UI/UX Design", notes: "User-centric design thinking.", tutorial: "https://youtube.com" }
        ]
      },
      {
        name: "Backend",
        topics: [
          { title: "Node.js", notes: "Event loop and async.", tutorial: "https://nodejs.org/" },
          { title: "API Design", notes: "RESTful APIs.", tutorial: "https://youtube.com" },
          { title: "Authentication", notes: "JWT & OAuth.", tutorial: "https://youtube.com" },
          { title: "Database", notes: "MongoDB optimization.", tutorial: "https://mongodb.com" },
          { title: "Scaling", notes: "Load balancing.", tutorial: "https://youtube.com" },
          { title: "Security", notes: "Prevent SQL injection.", tutorial: "https://youtube.com" }
        ]
      },
      {
        name: "System Design",
        topics: [
          { title: "Feed Ranking", notes: "Recommendation systems basics.", tutorial: "https://youtube.com" },
          { title: "Image Storage", notes: "CDN & object storage.", tutorial: "https://youtube.com" },
          { title: "Search Systems", notes: "ElasticSearch basics.", tutorial: "https://youtube.com" },
          { title: "Scalability", notes: "Handling millions of users.", tutorial: "https://youtube.com" },
          { title: "Caching", notes: "Redis usage.", tutorial: "https://youtube.com" },
          { title: "Microservices", notes: "Architecture design.", tutorial: "https://youtube.com" }
        ]
      }
    ]
  },
  {
    name: "TCS",
    subjects: [
      {
        name: "Aptitude",
        topics: [
          { title: "Quantitative", notes: "Percentages, ratios.", tutorial: "https://youtube.com" },
          { title: "Logical Reasoning", notes: "Puzzles and patterns.", tutorial: "https://youtube.com" },
          { title: "Verbal Ability", notes: "Grammar and comprehension.", tutorial: "https://youtube.com" },
          { title: "Probability", notes: "Basic probability problems.", tutorial: "https://youtube.com" },
          { title: "Time & Work", notes: "Work efficiency problems.", tutorial: "https://youtube.com" },
          { title: "Data Interpretation", notes: "Charts and tables.", tutorial: "https://youtube.com" }
        ]
      },
      {
        name: "Technical",
        topics: [
          { title: "C Programming", notes: "Pointers and memory.", tutorial: "https://youtube.com" },
          { title: "Java Basics", notes: "OOPS concepts.", tutorial: "https://youtube.com" },
          { title: "DBMS", notes: "Basic SQL queries.", tutorial: "https://youtube.com" },
          { title: "OS", notes: "Basic OS concepts.", tutorial: "https://youtube.com" },
          { title: "CN", notes: "Networking basics.", tutorial: "https://youtube.com" },
          { title: "Data Structures", notes: "Basic implementation.", tutorial: "https://youtube.com" }
        ]
      },
      {
        name: "Interview Prep",
        topics: [
          { title: "HR Questions", notes: "Tell me about yourself.", tutorial: "https://youtube.com" },
          { title: "Resume Discussion", notes: "Project explanation.", tutorial: "https://youtube.com" },
          { title: "Behavioral Questions", notes: "STAR method.", tutorial: "https://youtube.com" },
          { title: "Company Overview", notes: "Know TCS values.", tutorial: "https://tcs.com" },
          { title: "Mock Interview", notes: "Practice rounds.", tutorial: "https://youtube.com" },
          { title: "Communication Skills", notes: "Clear articulation.", tutorial: "https://youtube.com" }
        ]
      }
    ]
  }
  // KEEP YOUR FULL COMPANY DATA HERE
];

export default App;
