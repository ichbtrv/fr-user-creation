# FR-User-Signup

## User Creation Form

This app is a user creation form with 5 input fields. The Occupation and State allow users to select options returned from
an endpoint. The fields are equipped with basic validation. On validation, completion and successful submission of the form the user is redirected to a success page :)

## Technology Choices

---

### Next.js

I picked Next because it's my go to since I've tried it. The file based routing system
is highly intuitive and makes scaffolding apps extremely quick. In addition, it's different rendering methods give the
developer flexibility in optimizing the page. In the case of this app I did not implement an alternate render method.
However, if this form was in the context of a larger app preloading or statically generating "occupations" and "states"
would optimize the app, especially in the case of "states" considering that list hasn't changed since 1912. A better option would be to cache or memoize the inital response and check for changes using HTTP caching headers.

### Tailwind

---

I went with tailwind for styling because of its speed. Quickly being able to add and remove basic styles, especially in
the context of a simpler app, is a great development experience. In the case of a larger app Tailwind uses PostCSS to remove unused
CSS, reducing bundle size. It's also conventional, offering a streamlined developer experience across teams and not just for individual developers.

### React Query

---

React Query is a great tool for managing server state. While this app could have been implemented with the Javascript native fetch
API (or axios by itself) I used React Query to give me the ability to mold how my requests were made and open the door to caching down the
road.

### React-Hook-Form

---

I used React Hook Form to manage form state and validation because its syntax is
more readable and requires much less code to implement than hand rolling form validation. It has minimal dependencies, and no extra libraries necessary
for validation compared to alternatives like Formik.

### Typescript

---

I chose typescript for type safety and for debugging. It's much better to catch errors at compile time instead of my users encountering them at runtime. Additionally, it is self-documenting in a sense and easier to understand than vanilla Javascript when multiple developers are working on a codebase.

## Next steps

---

### Password encryption

---

First things first, security. Obviously this is not a real registration form but I feel like I need to mention the fact that there is absolutely zero encryption of the password, making it vulnerable to interception. Ideally, I would use a hashing algorithm with a salt sent from the server to encrypt the password. SSL might mitigate some of the need for this, but it never hurts to be careful.

### More stringent password validation

---

Currently the validation only checks for length, but it might be worth adding a regex to enforce cases like "at least one lowercase letter, at least one special character..." etc

### Check email to see if user exists

---

The heading says it all! Since this is a mock registration form there is no
way to check for an existing user, but its definitely something worth mentioning.

### Adding additional occupations

---

While Water Softener and Entry Level Seat Recliner are some highly sought after positions, somebodies gotta come and fix your sink when it breaks. If
it makes sense in the context of the rest of the app it might be a good idea to add an "other" field with its own validation, to allow the user
to input a profession not listed.

### Navigation from success page

---

After the form has submitted successfully you are redirected to a 'new user' page which is currently a dead end. I omitted the "back to sign up button" intentionally - while it may be better UI for those using and testing this particular app (going back and forth and testing different inputs), I didn't think it would make sense to sign up again. However, with UX in mind, moving to a different page and displaying a success message was a good idea even though it was a dead end.

### Better Error Handling

---

Currently I have defaults in place in case the request fails (which could maybe be expanded, especially if working within a PWA in offline mode), but the way I have it setup is that only these defaults show if the request fails for whatever reason.
I didnt want to create a loading state for the select fields, because I felt like that would not have translated into a great user experience, similarly I didnt want to display a loading state on the whole form if only a portion of the form needed data from the request. The defaults for "states" and "occupation" display essentially placeholder results prompting the user to pick an occupation or state. While this covers for a delay in request response time, the problem with this however, is that since the request comes from the same endpoint that the app ultimately posts to, an uncaught error could really interfere with the completion of the users registration. If the user is able to complete the form, that means they havent chosen the defaults and their formdata should successfully submit.

### Refactor form into Higher Order Functions

---

Currently the form contains a lot of repetitive code. If I were to refactor this, in the interest of maintaining a DRY codebase, I would move similar parts (such as the `<input>` fields) to Higher Order Functions. This would allow me to reuse the code for multiple forms, and would also allow me to easily add additional fields to the form.
