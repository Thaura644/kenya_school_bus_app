# Kenya School Bus App Documentation

**Version**: 1.0.0  
**Last Updated**: December 6, 2024  

---

## **Introduction**  
The **Kenya School Bus App** is an efficient school bus management solution designed to facilitate real-time tracking of school buses, manage routes, and handle attendance. This application connects drivers, parents, and administrators, ensuring seamless communication and service. The app integrates with a FastAPI backend and uses PostgreSQL, managed by an Odoo module for administration.

---

## **Key Features**  

### **Driver Features**
1. **Login and Authentication**  
   - Secure login using FastAPI's `/auth/login` endpoint.  
   - JWT-based session management.  

2. **View Assigned Routes**  
   - Drivers can view their assigned routes, including stops, start/end points, and route duration.  

3. **Real-Time Tracking**  
   - Start GPS tracking for the bus route.  
   - Live updates to the backend via WebSockets.  

4. **Route Visualization**  
   - Interactive maps displaying routes, stops, and current location.  

5. **Send Notifications** *(Optional)*  
   - Notify parents when nearing stops via Firebase Cloud Messaging (FCM).  

6. **End Trip**  
   - Conclude a trip, stopping GPS tracking and syncing journey data to the backend.  

7. **Logout**  
   - Clear session and navigate back to the login screen.

---

### **Parent Features**  
1. **Login and Authentication**  
   - Secure login with credentials validated via FastAPI.  
   - JWT token for session management.  

2. **View Child’s Assigned Route**  
   - Display the child’s bus route details with stops and estimated timings.  

3. **Real-Time Bus Tracking**  
   - Dynamic map showing the bus's live location.  

4. **Receive Notifications** *(Optional)*  
   - Alerts for the bus approaching the child’s stop via FCM.  

5. **Contact Driver or School** *(Optional)*  
   - Call functionality to contact the driver or school.  

6. **Logout**  
   - Session termination and redirection to the login screen.

---

## **Backend Architecture**

### **FastAPI Implementation**
- **Authentication**:  
  Endpoints to handle login and JWT-based authentication.  
  Example Endpoint: `/auth/login`  

- **Route Management**:  
  - Assign and fetch routes for drivers and children.  
  - Example Endpoint: `/routes/assigned/{driver_id}`  

- **Real-Time Tracking**:  
  - WebSocket-based communication to update GPS location.  
  - Example Endpoint: `/tracking/update`  

- **Notification Service**:  
  - Integration with Firebase Cloud Messaging for alerts.  

- **Database**:  
  PostgreSQL serves as the primary database for all app data, managed by an Odoo module for administration.

---

## **Admin Panel (Odoo Module)**

### **Key Features**
1. **Driver Management**  
   - Add, edit, and remove drivers.  
   - Assign routes to drivers.  

2. **Parent Management**  
   - Link parents to their children and manage credentials.  

3. **Bus Route Management**  
   - Create, edit, and delete routes.  
   - Assign stops and schedules.  

4. **Attendance and Reporting**  
   - Track attendance of children during trips.  
   - Generate trip summaries and reports.  

5. **Integration**  
   - Seamless data synchronization with the FastAPI backend.  

---

## **Folder Structure Overview**

### **Root Directory**
| **Name**         | **Description**                                                       |
|-------------------|-----------------------------------------------------------------------|
| `.expo`          | Expo configuration files.                                            |
| `assets`         | Static assets such as images and icons.                              |
| `mockups`        | Mockup files for UI/UX design.                                       |
| `node_modules`   | Dependencies for the project.                                        |
| `src`            | Source code for the app.                                             |
| `package.json`   | Project configuration and dependencies.                              |
| `README.md`      | Documentation and instructions.                                      |

---

### **`src` Directory**
| **Folder**          | **Description**                                                      |
|----------------------|----------------------------------------------------------------------|
| `components`         | Reusable UI components, such as headers, cards, and route details. |
| `Dashboard`          | Contains logic and UI for the driver dashboard.                   |
| `features`           | Features like authentication and notifications.                   |
| `Screens`            | Screens for navigation, including login, routes, and home.        |
| `SignUp`             | Registration flow for new users.                                  |
| `store`              | State management files, including actions and reducers.           |

---

### **Key Files**
| **File**                  | **Description**                                                   |
|---------------------------|-------------------------------------------------------------------|
| `App.js`                  | Main application entry point.                                    |
| `authNavigator.js`        | Handles navigation for authentication flows.                    |
| `tab.js`                  | Defines the tab-based navigation system.                        |
| `reducers.js`             | Reducers for managing application state.                        |
| `AuthContext.js`          | Context for managing authentication state globally.             |

---

## **Technologies Used**
1. **Frontend**:  
   - **React Native**: For mobile app development.  
   - **Expo**: To streamline development and testing.  

2. **Backend**:  
   - **FastAPI**: Handles API requests, authentication, and WebSocket communication.  
   - **Firebase Cloud Messaging (FCM)**: For push notifications.  

3. **Database**:  
   - **PostgreSQL**: Managed by the Odoo module for data storage.  

4. **Admin Panel**:  
   - **Odoo**: For route, driver, and parent management.  

---

## **Future Enhancements**
1. Parent communication with schools directly through the app.  
2. Enhanced analytics for route optimization and performance tracking.  
3. Biometric authentication for drivers and parents.  

---

For any further assistance or queries, please contact the development team at **support@odoo.co.ke**.