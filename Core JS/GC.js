/* 
CREATE OBJECT
      │
      ▼
STORE IN HEAP
      │
      ▼
IS IT REACHABLE?
   │         │
 YES         NO
   │         │
KEEP      GARBAGE
              │
              ▼
      GARBAGE COLLECTOR
              │
              ▼
        MEMORY FREED
*/