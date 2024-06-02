# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

This app is a transaction management application. It enables the user to import transaction list from CSV file, change transaction status, delete transaction and export filtered transaction list to CSV file.

## How it works
1. On the first render a request for mock data should be sent, and the data should be rendered into a table.
2. When the user clicks the import button - I add the file added to the table, it expands (the data array grows), there are more pages.
3. When the user clicks on the Import button, a modal window opens with the offer to download a CSV file.
4. When user clicks on the Export button, download a file for the user with basic information according to the selected filters (transaction type, status).
5. On the page with the list of transactions, display the data together with pagination, and when user chooses the type or status, filter the data in the table.
6. When user clicks on the Edit button, show the user a modal window with an offer to change the status of the transaction and click Save.
7. When user clicks on the Delete button, show the user a dialog asking if he is sure he wants to delete this transaction from the database.

## Technologies

- React 18 with hooks, no classes
- Typescript
- UI library:
Chakra UI,
styled-components
- State manager:
 Redux-Toolkit
- React-Query
- Axios-mock-adapter 
- React-hook-form 
 - CSV Converter:
 Papaparse,  file-saver

 qrf