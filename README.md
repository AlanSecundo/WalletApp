# React Native Wallet App

This is a [**React Native v0.76**](https://reactnative.dev) project developed as part of a technical assessment. The application simulates a wallet app with basic features, such as tracking transactions, displaying balances, and logging user interactions.

---

## 🚀 **Getting Started**

### **Step 1: Clone the Repository**

Clone this repository to your local machine:

```bash
git clone <repository-url>
cd <repository-folder>
```

### **Step 2: Install Dependencies**

Make sure you have Node.js installed. Install the project dependencies by running:

```bash
npm install
```

### **Step 3: Start the Metro Server**

Start the **Metro Bundler**, which is required to bundle JavaScript for the app:

```bash
npm start
```

### **Step 4: Run the Application**

#### For Android:

```bash
npm run android
```

#### For iOS:

Due to limitations during development, the iOS platform was not tested or configured. See [Limitations](#limitations) for more details.

---

## 🧰 **Technical Overview**

### **Key Features**

- Display user's wallet balance, transaction list and details.
- Collect, store and validate a user PIN to access the application.
- Support for dynamic language detection (native) on the user's device.

### **Tech Stack**

- **React Native v0.76**: Mobile app development framework.
- **TypeScript**: For type safety and code clarity.
- **Redux v9.1**: For global state management.
- **React Native Paper**: UI components

---

## ⚠️ **Important Notes**

- **Database File**: The app requires a `db.json` file for proper functionality. However, this file is not included in the repository. Ensure it is added to the project root before running the application.
- **Platform Support**: Development and testing were limited to Android due to the lack of access to macOS for iOS testing.

---

## 📝 **Development Considerations**

### **Time Spent**

- The project took approximately **10 to 12 hours** to achieve its current state.

### **Limitations**

- **iOS Development**: Unable to test or configure and develop due to lack of access to a macOS device.

---

## 🚦 **Future Improvements**

- Add full support for iOS, including testing on physical devices.
- Implement Google Analytics or New Relic for production-ready logging.
- Add a local database (SQLite) to store logs for offline traceability.

---

## 🛠 **Troubleshooting**

If you encounter issues:

- Verify that your development environment matches the [React Native environment setup guide](https://reactnative.dev/docs/environment-setup).
- Check for missing dependencies:
  ```bash
  npm install
  ```
- Restart the Metro Bundler with:
  ```bash
  npm start --reset-cache
  ```

For additional help, refer to the official [React Native Troubleshooting Guide](https://reactnative.dev/docs/troubleshooting).

---

## 💬 **Contact**

If you have questions or feedback about this project, feel free to contact me via GitHub.
