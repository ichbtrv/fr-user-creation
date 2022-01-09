# fr-user-signup

## User Creation Form

This app is a user creation form with 5 input fields. The Occupation and State allow users to select from options returned from
an endpoint. The fields are equipped with some basic validation but overall have some vulnerabilites. On validation, completion and successful submission of the form the user is redirected to a success page :)

## The tech I used for this app:

Next.js

Typescript

Tailwind

React Query

Axios

React-Hook-Form

### Next.js

I picked Next because its basically been my go to ever since I've tried it out for the first. The file based routing system
is highly intuitive for me and makes scaffolding apps extremely quick. In addition its different rendering methods give the
developer a lot of flexibility in optimizing the page. In the case of this app I did not implement an alternate render method,
however if this form was in the context of a larger app, preloading or statically generating the "occupations" and "states"
would definitely help optimize the app, especially in the case of "states" considering that list hasnt changed since 1912 so
constantly refetching it isnt necessary.Either that or, memoizing it.

### Typescript

I chose typescript for type safety and for easier debugging.

### Tailwind

I went with tailwind for styling for its speed. I think quickly being able to add and remove basic styles, especially in
the context of a simpler app, is a really great development experience. In the case of a larger app Tailwind does purge unused
css, reducing bundle size.

### React Query

React Query has been a great tool for managing server state for me. While this app could have been implemented with the fetch
api (or axios by itself), I used React Query to give me the ability to potentially mold how my requests were made/cache down the
road. I didnt end up exploring these, but hey, the possibility is still there.

### Axios

I chose axios because of its condensed syntax and to avoid having to stringify the data(body)

### React-Hook-Form

I used React Hook Form to manage form state and validation because for me personally its syntax is a
little bit more readable and there is much less code necessary to implement what I had implemented,
thus, faster development time. Also, at least in comparison to formik it has less dependencies, and no extra libraries necessary
for validation so it seemed great for this.

# What I can improve

## Password encryption

First things first, security. Obviously this is not a real registration form but I feel like I need to mention the fact that there is absolutely zero encryption of the password, making it vulnerable to interception.

## More stringent password validation

Currently the validation only checks for length, but it might be worth adding a regex to enforce cases like "at least one lowercase letter, at least one special character..." etc

## Check email to see if user exists

The heading says it all! Since this is a mock registration form there is no
way to check for an existing user, but its definitely something worth mentioning.

## Adding additional occupations

While Water Softener and Entry Level Seat Recliner are some highly sought after positions, somebodies gotta come and fix your sink when it breaks. If
it makes sense in the context of the rest of the app it might be a good idea to add an "other" field with its own validation, to allow the user
to input a profession not listed.

## Navigation from success page

After the form has submitted successfully you are redirected to a 'new user' page which is currently a dead end. I omitted the back to sign up button intentionally; while it may be better UI for those using and testing this particular app (going back and forth and testing different inputs), I didnt think it would make sense to sign up again. However, with Ux in mind, I thought that moving to a different page and displaying a success message was a good idea.

## Better Error Handling

Currently I have defaults in place in case the request fails (which could maybe be expanded, especially if working within a PWA in offline mode), but the way I have it setup is that only these defaults show if the request fails for whatever reason.
I didnt want to create a loading state for the select fields, because I felt like that would not have translated into a great user experience, similarly I didnt want to display a loading state on the whole form if only a portion of the form needed data from the request. The defaults for "states" and "occupation" display essentially placeholder results prompting the user to pick an occupation or state. While this covers for a delay in request response time, the problem with this however, is that since the request comes from the same endpoint that the app ultimately posts to, so an uncaught error could really interfere with the completion of the users registration. If the user is able to complete the form, that means they havent chosen the defaults and their formdata should successfully submit.

## Prevent multiple submissions with Submitting State

Adding an isSubmitting state and disabling the submit button if true prevent multiple submissions and show the user that their request is processing.

## Refactor form into Hoc's

Currently the form contains a lot of repetetive code.For example, it would be a good idea to refactor each input into something like `<Input{...register('name')}/>`
