# Godfidence API

Godfidence is a powerful API designed to gather and provide Christian resources for the Godsufficient app. Built with JavaScript, Next.js, and Express, this API serves as the backbone for various features aimed at enriching the Christian community.

## Features

The Godfidence API supports the following key features for the Godsufficient app:

1. **Mentor**
   - Become a mentor
   - Find a mentor

2. **Church**
   - Provides a list of nearby churches

3. **Learn**
   Offers Christian learning materials in three mediums:
   - Listen
   - Watch
   - Read

4. **Volunteer**
   - Lists events for volunteer opportunities

5. **Apps**
   - Showcases a curated list of Christian apps

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/godfidence-api.git
   ```

2. Navigate to the project directory:
   ```
   cd godfidence-api
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory with the following content:
   ```
   MONGODB_URI_LOCAL=mongodb://localhost:27017/your_local_db_name
   MONGODB_URI_ATLAS=your_mongodb_atlas_connection_string
   USE_ATLAS=true_or_false

   PORT=your_preferred_port
   DB_PORT=your_preferred_db_port
   ```
   Replace the placeholders with your actual MongoDB connection strings and preferred port numbers.

5. Start the development server:
   ```
   npm run dev
   ```

The API should now be running on `http://localhost:YOUR_PORT`, where YOUR_PORT is the port number you specified in the .env file.

## API Endpoints

- `/mentor`: Mentor-related operations
- `/church`: Church listing operations
- `/learn`: Learning material operations
- `/volunteer`: Volunteer event operations
- `/app`: Christian app listing operations

For detailed API documentation, please refer to our [API Documentation](link-to-your-api-docs).

## Contributing

We welcome contributions to the Godfidence API! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Contact

For any queries or support, please contact [jadymcintyre@outlook.com].
