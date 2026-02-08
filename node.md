# NODE

##  How DNS works!.
Domain Name Service  helps us to identify webstes using the name 
like when we go to an website like www.google.com how the web knows what is google.com in this We Request the DNS to get us the server IP address of that particular url and DNS gives us that due to which we are able to Surf www.google.com

Doman Name Entry:->User types an domain
1. DNS query:->The browser sends an DNS query to resolve th domain into an IP address 
2. DNS Server:-> Provides the correct IP address for the domain 
3. Browser Connects:->The browser uses the IP to connect to the Web server and Loads the Website 

## How Web Works!..
1. Client Request Initiation: The client (browser) initiates a network call by entering a URL.
2. DNS Resolution: The browser contacts a DNS server to get the IP address of the domain.
3. TCP Connection: The browser establishes a TCP connection with the server's IP address.
4. HTTP Request: The browser sends an HTTP request to the server.
5. Server Processing: The server processes the request and prepares a response.
6. HTTP Response: The server sends an HTTP response back to the client.
7. Network Transmission: The response travels back to the client over the network.
8. Client Receives Response: The browser receives and interprets the response.
9. Rendering: The browser renders the content of the response and displays it to the user.

## What are Protocols?...
1. Http (HyperText Transfer Protocol):

a) Facilitates communication between a web browser and a server to transfer web pages.
b) Sends data in plain text (no encryption).
c) Used for basic website browsing without security.

2. HTTPS (HyperText Transfer Protocol Secure):

a) Secure version of HTTP, encrypts data for secure communication.
b) Uses SSL/TLS to encrypt data.     
c) Used in online banking,e-commerce etc..

3. TCP(Transmission Control Protocol):

a) Establish a connection Before any data is Transferred
b) Ensures reliable,ordered and erorr echecking data every over the internet 

## Require KeyWord....
whenever we want to use an module in node 
we use the Require keyword 
modules like:->
1. fs -> used for reading and writing in the files 
2. http :->....
learn about node modules more in the future chapter

1. Purpose:-> imports module in NODE.js
2. caching:-> Modules are cached after the first require call 
3. .js :->is added automatically and is not needded at the end of the module name 
4. Path Resolution:->Node.js searches for module in core ,node_modules,and file paths 

## Creating Your First Node SERVER 
WE are going to use the http module to make an server 
then we will declare an function to get the respnse from the cleint and the response too 
then going to save the http.createserver in anything 
then add an listener in that const server 

1. function RequestListener(req,res){
    console.log(req);
}
const server=http.createServer(RequestListener);
server.listen(3000);// Here the 3000 is the port number     

we also have to declare an port for that 

# Node Lifecycle AND Event Loop 

## letss suppose i am having on server and total users are 500k how the server will handle 

Think of Node like:

One extremely fast receptionist + a big back-office team

Receptionist = Event Loop (main thread)

Back office = OS / thread pool

Phone calls = Incoming requests

The receptionist:

Takes a request

If it’s quick → handles immediately

If it’s slow → sends it to back office and moves on

That’s how 500k requests don’t crash it.

## How to Exit the server manually without terminal 

process.exit();

function RequestListener(req,res){
    console.log(req);
    process.exit();
}

# Response 

## we have talked about the response now we will talk about the response 


# Event Loop and Async Code!...

## Event Driven 
    the node is event driven like whenever there is an event occurs 
    we listen it by using the event listeners and those event listeners 
    put that task in an qeueu then that task goes into the event the loop 
    then we get to see the event handler that handles those events 

## Single Threaded 

    request and events are handled by only on thing and that is event loop 
    that makes it single threaded (single unit of process)
    there are worker threads lets suppose we gete an requests o fetch data from the DB 
    then the loop will use the worker threads to fetch that data and feed it 

## v8 vs libuv
1. What V8 Does (Responsibilities):->
    Parses JavaScript
    JIT compiles JS to machine code
    Executes JS functions
        Handles:
            Call Stack
            Heap
            Garbage Collection

2. What libuv Does (Responsibilities):->
    Event loop
    Thread pool
    Async I/O:
    File system
    Networking
    DNS
    Timers
    OS-level abstractions (Linux, Windows, macOS)

## Async Code 
    async code cacn be understood by one line 
    "le bhai ye request jab kaam hojaye to waapis se call back kardena"

    lets suppose in sum.js here we wrote the response alongside the req.on("end"){
        beacuse if we didnt do that we will execute the result firstly then we will compute it 
        that will make an problem there 
        thats how we use async code;
    }

## Blocking code 
    a blocking code blocks the all code that will be in the queue 
    i will just focus on one line 

    ex.fs.writeFileSync();this will block all the requests at that time 
    to make it execute first which is not an good practice 

    so we have to use the async method that is fs.writeFile();

# NPM and Tools

## Creating an official project 
npm init
## npm scripts 


## Nodemon 
