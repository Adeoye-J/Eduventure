# StudentPreneur Solution

# Project Setup Guide For The Team

### Accessing the Frontend Folder
1. **Navigate to the project directory:**
   ```bash
   cd frontend
   ```

### Installing Dependencies
2. **Install the required dependencies:**
   Make sure you're in the `frontend` directory, then run:
   ```bash
   npm install
   ```

### Changing Branches
3. **Switch to your feature branch:**
   Ensure you create or switch to your own branch and **do not commit directly to the `main` branch**.
   ```bash
   git checkout -b your-feature-branch-name
   ```

### Pulling Changes from Main Branch
4. **Keep your branch up-to-date:**
   Regularly pull updates from the `main` branch to avoid conflicts.
   ```bash
   git pull origin main
   ```

### Committing Changes
5. **Committing changes:**
   After making changes, commit them to your feature branch.
   ```bash
   git add .
   git commit -m "Describe your changes"
   ```

### Pushing Changes
6. **Push your changes to the remote branch:**
   After committing, push the changes to your branch.
   ```bash
   git push origin your-feature-branch-name
   ```

### Merging Back to Main
7. **Create a Pull Request:**
   After finishing your work, **create a pull request** to merge your changes into the `main` branch. Ensure your code is reviewed by another teammate before merging.
