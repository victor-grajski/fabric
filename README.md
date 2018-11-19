# Divison of labor
-Home page:           Victor
-Create profile page: Ashish
-Profile page:        Vidya
-Login page + welcome mat: Olivia

# Git

## Commandments of using Git
-Always create local branch. Never commit/push to master
-create a new branch when starting on something new, even if its a bug fix.

-Create a pull request for your branch when you want to merge to master (remote repo).
-DO NOT merge directly-> WAIT for peer review of pull request before merge.
-Always test and make sure code/component in working satisfactorily before merging to master.

-Use git 'rebase'.
-Please, do not edit directly on remote repo through the UI.

-put good commit descriptions
-use consistent variable naming and comments.

-Git commit sequence: git status -> git add . -> git status -> git commit -m 'commitMessage'

-Git rebase sequence: git checkout master -> git pull -> git checkout branchName -> git rebase master -> In case of merge conflicts, fix them, then git add . , git merge --continue. [If you want to abort rebasing, use git rebase --abort]

## Freqently used git commands
-Pulling a repo/master: git pull
-creating a branch: git checkout -b yourInitials_branchName
-looking at branches/current branch: git branch (* = branch you are on )
-moving from branch-to-branch:  git checkout branchToMoveTo
-rebase(move to your branch first): git rebase master
-pushing branch to remote: git push origin branchName
-pushing branch after rebase: git push -f origin branchName (force push, be carefull)
-deleting branch: git branch -D branchName

## Nuclear buttons - think before using
-Merging a pull request-> Don't merge untested, unreveiewed code. Creates a headache for people working independently.

-force push (git push -f branchName)-> Please dont force push master :D it can/will delete the good, awesome, working code in remote. Iff you have done this, tell team-mates to upload a pristine version of master.

## What can you do when u mess up
-tell someone, ask for help. Git is hard
-delete local repo and clone again.


# Data Structures in Firebase

Users:


  key:


  name:


        firstName: String


        lastName: String


  age: Integer


  gender: Integer (0=male,1=female,2=others)


  email: String


  password: String


  location: String (foreign key to Location)


  interests: array (keys to Interests)


Location:


  key: String


  city: String


  state: String


Interests:


  key: String


  description: String



