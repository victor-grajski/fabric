# Divison of Labor
- Search page:           Victor
- Create profile page: Ashish
- Profile page:        Vidya
- Login page + welcome mat: Olivia

# Git

## Commandments of Using Git
- Always create local branch. Never commit/push to master
- Create a new branch when starting on something new, even if its a bug fix
- Create a pull request for your branch when you want to merge to master (remote repo)
- DO NOT merge directly-> WAIT for peer review of pull request before merge
- Always test and make sure code/component in working satisfactorily before merging to master
- Use git 'rebase'
- Please, do not edit directly on remote repo through the UI
- Put good commit descriptions
- Use consistent variable naming and comments

### Git Commit Sequence
1. `git status`
2. `git add .`
3. `git status`
4. `git commit -m 'commitMessage'`

### Git Rebase Sequence
1. `git checkout master`
2. `git pull`
3. `git checkout branchName`
4. `git rebase master`
5. In case of merge conflicts, fix them, then `git add .`, `git merge --continue`. [If you want to abort rebasing, use `git rebase --abort`]
6. `git push -f origin branchName` (force push, be carefull)

## Freqently Used Git Commands
- Pulling a repo/master: `git pull`
- Creating a branch: `git checkout -b yourInitials_branchName`
- Looking at branches/current branch: `git branch` (* = branch you are on )
- Moving from branch-to-branch:  `git checkout branchToMoveTo`
- Rebase(move to your branch first): `git rebase master`
- Pushing branch to remote: `git push origin branchName`
- Pushing branch after rebase: `git push -f origin branchName` (force push, be carefull)
- Deleting branch: `git branch -D branchName`

## Nuclear Buttons - Think Before Using
- Merging a pull request-> Don't merge untested, unreveiewed code. Creates a headache for people working independently
- Force push (`git push -f branchName`) -> Please dont force push master :D it can/will delete the good, awesome, working code in remote. If you have done this, tell teammates to upload a pristine version of master

## What You Can Do When You Mess Up
- Tell someone, ask for help. Git is hard
- Delete local repo and clone again


# Firebase Data Structure
```
Users:
  key: String
  name:
       firstName: String
       lastName: String
  age: Integer
  gender: String
  email: String
  password: String
  location: String
  interests: String Array
 
```
