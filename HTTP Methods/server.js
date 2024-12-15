/*
GET
Purpose: Retrieve data from the server.
Characteristics:
Data is sent in the URL as query parameters.
It is safe (does not change the state of the server).
It is idempotent (multiple identical requests have the same result).
Commonly used to fetch web pages, API data, or images.
Example:
bash
Copy code
GET /users?id=123 HTTP/1.1


2. POST
Purpose: Send data to the server to create a new resource or perform an action.
Characteristics:
Data is sent in the body of the request.
It is not idempotent (repeated requests can create duplicate resources or perform the action multiple times).
Used for submitting forms, uploading files, or sending JSON data in APIs.
Example:
bash
Copy code
POST /users HTTP/1.1
Content-Type: application/json
{
  "name": "Tushar",
  "email": "tushar@example.com"
}


3. PUT
Purpose: Update or replace a resource on the server.
Characteristics:
Replaces the entire resource with the provided data.
It is idempotent (repeated requests result in the same state).
Example:
bash
Copy code
PUT /users/123 HTTP/1.1
Content-Type: application/json
{
  "name": "Tushar",
  "email": "tushar_updated@example.com"
}


4. PATCH
Purpose: Partially update a resource on the server.
Characteristics:
Modifies only the specified fields in the resource.
It is not necessarily idempotent, depending on implementation.
Example:
bash
Copy code
PATCH /users/123 HTTP/1.1
Content-Type: application/json
{
  "email": "tushar_new@example.com"
}

_PUT_:

- Replaces the entire resource with a new version
- Requires sending the entire updated resource, 
even if only a few fields have changed
- Can be thought of as "update and replace"

Example: Updating a user's profile with new name,
 email, and address using PUT would require sending 
 all three fields, even if only the name changed.

_PATCH_:

- Updates only the specified fields, leaving others unchanged
- Only requires sending the changed fields
- Can be thought of as "update and merge"

Example: Updating a user's profile with only a new name 
using PATCH would only require sending the new name, leaving 
the email and address unchanged.

So, if you need to update a single field or a few fields,
 PATCH is a better choice. If you need to update the entire 
 resource or multiple fields, PUT might be more appropriate.
  However, the specific usage ultimately depends on the API 
  design and implementation.


5. DELETE
Purpose: Remove a resource from the server.
Characteristics:
It is idempotent (repeated requests result in the same state).
Example:
bash
Copy code
DELETE /users/123 HTTP/1.1


6. HEAD
Purpose: Retrieve only the headers of a resource (no body content).
Characteristics:
Used to check metadata or verify if a resource exists (e.g., checking status codes).
It is safe and idempotent.
Example:
bash
Copy code
HEAD /users HTTP/1.1


7. OPTIONS
Purpose: Describe the communication options available for a resource.
Characteristics:
Often used in CORS (Cross-Origin Resource Sharing) preflight requests.
Example:
bash
Copy code
OPTIONS /users HTTP/1.1



8. TRACE
Purpose: Echo back the received request, primarily for debugging.
Characteristics:
Rarely used in production.
Example:
bash
Copy code
TRACE /users HTTP/1.1

*/