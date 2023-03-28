# ERC20-Contract for zkThon

## Pre-requisites : 

1. Have NodeJS >=16
2. Have metamask extension installed (https://www.geeksforgeeks.org/how-to-install-and-use-metamask-on-google-chrome/)

### Steps to follow : 

1. Clone this repository into your local using the command - 

```
git clone https://github.com/pikachua7/ERC20-Contract.git
```

2. Go into the root

```
cd ERC20-Contract
```

3. install dependencies

```
npm install
```
4. make a .env file in your src folder and add this line - 

```
PRIVATE_KEY = "0x<INSERT-YOUR-PRIVATE-KEY> "
```

5. Update your contract address in Token.js file

6. Update your abi in abi.json

7. Ensure that you are in src folder and then run Token.js file

```
node Token.js
```
