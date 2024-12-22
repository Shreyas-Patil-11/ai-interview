const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
//   async function run() {
   export const chatSession = model.startChat({
      generationConfig,
    //   history: [
    //     {
    //       role: "user",
    //       parts: [
    //         {text: "Job Position: Full Stack Developer, Job Description: Angular, React, MySql, Years of Experience: 5\nDepends on this information please give me 5 interview questions with answer in Json Format. Give question and answer as field in JSON"},
    //       ],
    //     },
    //     {
    //       role: "model",
    //       parts: [
    //         {text: "```json\n[\n  {\n    \"question\": \"You're building a feature that involves a complex form with multiple validation rules.  Describe your approach to handling form state management and validation, considering both Angular and React.\",\n    \"answer\": \"For **Angular**, I'd likely leverage Angular's Reactive Forms. This allows for strongly typed form controls and built-in validation features through validators. Form state can be managed directly within the component or by using a service for more complex scenarios. Observables from the form controls can be used for dynamic updates and conditional logic. For **React**, I'd consider `formik` or `react-hook-form` as they provide excellent mechanisms for handling state, validations, and submissions. These libraries integrate well with React's component model and offer a declarative approach to form building. My choice would depend on project complexity and preference of using custom hooks or library components. I'd prioritize maintainability and testability when choosing an approach.\"\n  },\n {\n    \"question\": \"Explain the difference between `JOIN` and `LEFT JOIN` in MySQL. When would you use one over the other?\",\n    \"answer\": \"`JOIN` (or `INNER JOIN`) returns only rows where there is a match in both tables based on the join condition. `LEFT JOIN` returns all rows from the left table, and matching rows from the right table. If there's no match in the right table, the columns from the right table will be `NULL`. I would use `JOIN` when I need data from both tables and only want to include records that have a corresponding entry in both. I would use `LEFT JOIN` when I need to include *all* records from the left table, even if there are no matching records in the right table. For example, `LEFT JOIN` would be useful when getting all users and their orders but showing all users, even the one who did not place order.\"\n  },\n  {\n    \"question\": \"In React, what are some common performance optimization techniques you've used or are aware of?\",\n    \"answer\": \"Several techniques can be employed to optimize React performance. Some common ones I've used include: **Memoization** using `React.memo` for functional components and `useMemo` or `useCallback` hooks to avoid unnecessary re-renders. **Lazy Loading** components using `React.lazy` in conjunction with `Suspense`. **Code Splitting** using tools like Webpack to load only the necessary JavaScript for the current view. **Virtualization** libraries like `react-window` or `react-virtualized` to efficiently render long lists or large datasets. I'm also aware of the importance of **key prop** usage and avoiding inline functions in the render path. Finally, I'd profile the application with the React DevTools to pinpoint actual performance bottlenecks.\"\n  },\n   {\n    \"question\": \"Describe the concept of Observables in Angular. Give an example of where you might use them.\",\n    \"answer\": \"In Angular, Observables are a powerful mechanism for handling asynchronous data streams. They represent data emitted over time, and components can 'subscribe' to them to react to these changes. This is in contrast to Promises, which deal with a single value over time. Observables can emit multiple values and can be canceled. Common use cases include: handling HTTP requests using `HttpClient`, working with form controls and their value changes, responding to user events, or dealing with real-time data updates. For example, I might use an Observable to listen to a stream of data from a Web Socket and update a chart in my component every time I receive a new message.\"\n  },\n  {\n    \"question\": \"You've identified a slow-running query in your MySQL database. What steps would you take to diagnose and improve its performance?\",\n    \"answer\": \"I would take the following steps: First, use MySQL's `EXPLAIN` command to understand the query execution plan and identify potential bottlenecks (e.g., full table scans). If full table scan happens, I will check the where conditions to identify if required indexes are missing. Check for missing indexes on columns used in `WHERE`, `JOIN`, and `ORDER BY` clauses. Then use MySQL profiling tools to pinpoint slow parts of the query execution. Then rewrite the query by making use of indexes or removing redundant joins. Consider caching data or denormalizing tables if required, and finally re-test the query after making the changes to ensure performance improvements. This is also important to be done in a staging environment before pushing changes to production.\"\n  }\n]\n```\n"},
    //       ],
    //     },
    //   ],
    });
  
   
// }