Hey team, since most of us are new to GitHub, I wanted to put together something we can reference as we work on this project together. 
I know this seems like a lot at first, but it gets easier over time and will make more sense the more you use GitHub and VS together. 

## How Our Repository is Organized
Branches > Production > Main

Branches –> Individual workspaces where each person works on their part of the project (these will be based off of issues in the Issue tab)
Production –> Where we merge everyone's finished work together to test it before going live
Main –> The actual live website code – we only update this once we're 100% sure everything works.

This setup helps us avoid conflicts and makes sure we can test everything together before the website actually updates.

## Part 1: Getting the Repository Set Up in Visual Studio
This is a one-time setup to get the project code onto your computer. 

1. Go to our GitHub repository and click the **<> Code** tab at the top left
2. Click the green **<> Code** button on the right side
3. In the dropdown, under the "Local" tab, **copy the URL** you see under "Clone"
4. Open Visual Studio Code
5. Press **Ctrl + Shift + P** (this opens the command palette in the top middle of VS)
6. Type **"Git: Clone"** and select it
7. **Paste the URL** you copied and press Enter
8. Choose where you want to save the project on your computer
9. When it asks if you want to open the cloned repository, click **Open**. Before working on the code, you’ll want to make and switch to a branch first! See Part 2!

The repository will always be on your computer now :) 
Your local version will *not* update other’s changes, so you’ll *always* need to pull down code from production before pushing your code (see Part 4)!!

## Part 2: Creating an Issue & Your Own Branch
Issues help us track who's working on what, and branches let you work on your part without accidentally messing up someone else's code.
You should do this every time you start working on a new task/part of the website.

1. Go to our GitHub repository and click the **Issues** tab at the top
2. Click **New issue**
3. Give it a clear title that indicates what you’re working on (ex. "Add navigation buttons" or "Style the About Us page")
4. On the right side, **assign the issue to yourself**
5. Scroll down and click the underlined text that says **Create a branch**
6. In the popup, click **Change branch source** and *make sure it says it's creating a branch from production (not main!)*
7. Click **Create branch**
8. You can ignore the pop up to copy the commands, the instructions in Part 3: Switching to Your Branch in Visual Studio use
   the user interface in VS (but it's also great to learn the GitBash terminal, if you want to!)

## Part 3: Switching to Your Branch in Visual Studio
Now you need to tell Visual Studio to switch to the branch you just created.

1. In Visual Studio, look at the bottom-left corner – you'll see the current branch name. It has the Source Control icon
   to the left of it (looks like a branching diagram)
3. Click on that branch name
4. A dropdown will appear – select your new branch from the list (it should match your issue name)
5. You're now on your own branch, so you can start coding without affecting anyone else's work

### *Always* check the bottom-left corner to make sure you're on the right branch before you start working!


## Part 4: Saving Your Work (Committing & Pushing)
When you've made progress and want to save your work to GitHub:

First, **always pull down the latest changes from production!** This makes sure you have everyone else's updates and helps prevent conflicts. 

1. Click the **Source Control** icon on the left sidebar (it looks like a branching diagram)
2. Click the **three dots** at the top of the **Source Control panel**
3. Hover over **Pull, Push** and then select **Pull from…**
4. In the dropdown, select **origin/production**

This brings in all the latest work that's been merged into production by other people.

If you see any conflicts pop up, please reach out to the group for help before continuing. We will want to look at it together to make sure nothing is being overwritten.

5. Now you'll see a list of files you've changed. Hover over the files and **click the + button** to "stage" them (basically tells Git you want to save these changes)
6. In the message box at the top, **write a short description** of what you did (ex. "Added navigation bar" or "Fixed page styling")
7. Click the **Commit** button
8. Click the **Sync Changes** button.

It is recommended to get in the habit of pulling from production before you start working each day as well. It can help prevent conflicts :)

## Part 5: Merging Your Work (Creating a Pull Request)
You’ll need to create a Pull Request (PR) when you are completely done with your task and ready to add it to the main project.

1. Go to our repository
2. You should see a yellow banner that says "Your branch had recent pushes" 
3. Click **Compare & pull request**

If you don't see this, go to the Pull requests tab and click New pull request, then select your branch!

4. Add a title (probably the same as your issue name) and describe what you did
5. On the right side, click the **gear icon** next to Reviewers and select someone to review your code (maybe the professor can do this or one of us can!
   This just gets a second pair of eyes on the code before sending it to production. We can also skip this if preferred ¯\_(ツ)_/¯)
7. Click **Create pull request**

Whoever was selected as the Reviewer will review it, and then we'll merge it into production!

## Troubleshooting
- Merge conflicts –> This happens when someone else changed the same code you did. Reach out if you experience this, it's probably easier to fix than you think :)
- Unsure which branch you’re on → Check the bottom-left corner of Visual Studio. That's where it always shows your current branch.
- Made changes to the wrong branch (it happens lol) → We can move them! Reach out to the group and we can figure it out!

Feel free to ask questions in the discord. Lots of great resources online, but it can still be a bit confusing/overwhelming if you’ve never used GitHub 
(all of us are still learning, its all good). Honestly, now is a great time to play with GitHub/VS so don’t be afraid to try things!! 
It’ll help you and everyone else learn a lot, even if something breaks haha

If you notice something above is incorrect or needs clarified, please let me know and I’ll update the README in our repo! Thanks! 
- k0space (GitHub) / hell0space (Discord) / Kelsey
