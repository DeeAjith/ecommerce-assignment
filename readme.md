**Deploy in local:**

Take a pull or download the repo.

## Run:

- npm install // installing packages
- npm start // for dev server
- npm build // for building PWA

## For running build in local

- npm install -g serve
- serve -s build

**Solution Document:**

1. **Sign-up Page**:

   - Implemented a registration form allowing new users to register.
   - Validated form inputs for email format and password strength.
   - Upon successful submission, sent user registration data to the backend API using Axios.

2. **Login Page**:

   - Designed a login form for existing users to log in.
   - Validated form inputs for email format and password.
   - Upon successful login, stored the authentication token in the local storage using `localStorage`.

3. **Protected Page**:

   - Created a protected page accessible only to logged-in users.
   - Fetched categories data from the backend API using Axios and displayed them in a paginated list.
   - Implemented pagination functionality to navigate through categories.

4. **Header**:

   - Developed a common header component displayed on all pages.
   - Ensured the header was static without any interactive elements like menus.

5. **Development Setup Steps**:

   - Set up the development environment with Node.js and npm.
   - Bootstrapped a new Next.js project using `create-next-app`.
   - Implemented UI components based on the provided Figma design and styled them using Tailwind CSS.

6. **API Integration**:

   - Utilized Axios for making HTTP requests to the backend API.
   - Implemented API endpoints for user authentication (sign-up, login) and fetching categories data.
   - Tested API endpoints using Postman to ensure correct functionality.

7. **State Management**:

   - Managed user authentication state (logged in/out) using React Context.
   - Stored the authentication token in the local storage upon successful login for persistent user authentication.

8. **Testing**:

   - Conducted testing of UI components and functionality to ensure proper behavior.
   - Tested API integration to verify data fetching and updating functionalities.

9. **Deployment**:
   - Deployed the Next.js app on Vercel's free tier for testing and accessibility.
   - Provided the live website URL for reviewers to test the functionality.

**Submission**:

1. **GitHub Repository**:

   - Pushed the code to a public GitHub repository with clear instructions in the README.md file on how to run the project locally.

2. **Live Website URL**:
   - Deployed the app and provided the URL for reviewers to test the functionality.
