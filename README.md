## Home page
Victor

## Create profile page
Ashish

## Profile page
Vidya

## Login page + welcome mat
Olivia

## Data Structures in Firebase

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