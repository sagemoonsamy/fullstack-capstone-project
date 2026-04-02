## 1. Finish user stories
**As a** Lead Developer,
**I need** to define the project requirements through user stories,
**So that** the development team has a clear roadmap and shared understanding of the MVP.

### Details and Assumptions
    * All project requirements are gathered from the architecture diagram.
    * Stories are tracked in the GitHub repository.

### Acceptance Criteria
```gherkin
Given a set of project requirements,
When I document them as user stories in GitHub,
Then I can track progress and prioritize development tasks.
```

## 2. Initialize and populate MongoDB
**As a** System Administrator,
**I need** to initialize and populate the MongoDB database,
**So that** the application has a reliable source of gift and user data for testing and production.

### Details and Assumptions
    * MongoDB is running on the Kubernetes cluster or a managed instance.
    * Initial data is sourced from a JSON seed file.

### Acceptance Criteria
```gherkin
Given a connection string to MongoDB,
When I run the database population script,
Then the "GiftsDB" is created with the "Gifts" and "Users" collections populated.
```

## 3. Run skeleton application
**As a** Developer,
**I need** to run the skeleton Express backend and React frontend,
**So that** I can verify the basic environment configuration and connectivity.

### Details and Assumptions
    * Environment variables are set up using .env.sample.
    * Dependencies are installed via npm install.

### Acceptance Criteria
```gherkin
Given the frontend and backend directories,
When I execute the start commands for both services,
Then the React app renders a default page and the Express server is listening.
```

## 4. Implement a landing page and navigation
**As a** Site Visitor,
**I need** a responsive navigation bar that toggles between "Login/Register" and "Welcome [Name]/Logout" states,
**So that** I can identify my authentication status and navigate the platform.

### Details and Assumptions
    * Navigation must include: Home, Search, and conditional Auth links.
    * The user's first name must appear in the Nav bar upon successful login.

### Acceptance Criteria
```gherkin
Given I am a logged-in user,
When I view the navigation bar,
Then I see "Welcome [FirstName]" and a "Logout" button instead of "Login/Register".
```

## 5. Add authentication components and logic
**As a** Returning User,
**I need** my session to be secured via JSON Web Tokens (JWT),
**So that** my credentials and private data remain protected during database communication.

### Details and Assumptions
    * Registration requires: First Name, Last Name, Email, and Password.
    * Login must return a JWT for subsequent authorized requests.

### Acceptance Criteria
```gherkin
Given I provide valid credentials on the LoginPage,
When I click "Login",
Then the system issues a JWT and redirects me to the listings page with my name in the Nav bar.
```

## 6. Implement Gifts details page
**As a** Logged-in User,
**I need** to be redirected to the Login page if I try to view gift details while unauthenticated,
**So that** the platform ensures only registered members can interact with listings.

### Details and Assumptions
    * The Details page is a "protected route."
    * It must display the item description and the comments section.

### Acceptance Criteria
```gherkin
Given I am not logged in,
When I click on a gift from the listings page,
Then I am redirected to the Login screen instead of the Details page.
```

## 7. Implement a search component
**As a** User,
**I need** to filter gift listings by category, condition, and item age,
**So that** I can quickly find specific household items that match my needs.

### Details and Assumptions
    * Filters must include: Category, Condition, and Age.
    * The search page is accessible via the navigation bar.

### Acceptance Criteria
```gherkin
Given I am on the SearchPage,
When I select a specific "Condition" filter (e.g., "New"),
Then the results update to show only items matching that specific condition.
```

## 8. Design and implement the comments feature
**As a** User,
**I need** to leave comments on gifts and see the overall sentiment,
**So that** I can give feedback and gauge the community's reaction to an item.

### Details and Assumptions
    * The Sentiment Analyzer Service is called via the /sentiment endpoint.
    * Sentiment data is stored alongside the comment.

### Acceptance Criteria
```gherkin
Given I am logged in and viewing a gift,
When I post a comment,
Then the Sentiment Service processes the text and the comment appears with a sentiment rating.
```

## 9. Containerize the services and applications
**As a** DevOps Engineer,
**I need** to containerize the frontend, backend, and sentiment services,
**So that** the application can be deployed consistently across different environments.

### Details and Assumptions
    * Dockerfiles are created for each service.
    * Images will be pushed to the IBM Cloud Registry.

### Acceptance Criteria
```gherkin
Given the application source code,
When I run the Docker build command,
Then a valid image is generated that successfully starts the service in a container.
```

## 10. Deploy backend and frontend
**As a** Product Owner,
**I need** the application deployed to a live cloud environment,
**So that** users can access the platform via a public URL.

### Details and Assumptions
    * Backend and Sentiment services are deployed to Kubernetes.
    * The Frontend is hosted on IBM Code Engine.

### Acceptance Criteria
```gherkin
Given the containerized images are available in the registry,
When the deployment pipeline finishes,
Then the public URL loads the application and connects successfully to the database.
```

## 11. Research authentication in React and Express
**As a** Developer,
**I need** to research JWT implementation and middleware integration,
**So that** I can securely handle user sessions and protect private routes.

### Details and Assumptions
    * Focus on jsonwebtoken library for the backend.
    * Use React Context or Redux for frontend state management.

### Acceptance Criteria
```gherkin
Given a need for secure data transmission,
When I have identified the middleware for Express and the storage method for the JWT in React,
Then I can document the implementation plan for the auth system.
```

