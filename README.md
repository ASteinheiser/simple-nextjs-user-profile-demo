This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# The goal

Create a NextJS website that utilizes an API to render a list of users. Clicking on a user will show their profile and allow for navigating to one of their friend's profiles.

# My process

### Quick design
Before I started to write any code, I went into [Figma](https://www.figma.com/) and made a quick design. Even if that vision is _blurry_ to start, it helps me move fast:

<img src="./docs/user-list.png" width="400px" height="auto" />
<img src="./docs/user-profile.png" width="400px" height="auto" />

### Project generation
Then I generated the project with `npx create-next-app@latest`, as this was the latest command available via the [NextJs docs](https://nextjs.org/docs/app/getting-started/installation). The following are the options I selected and why:
- TypeScript: I feel that having the additional layer of types not only helps me code faster, but with more confidence.
- ESlint: Clean, readable code is easier to test, update or refactor. Plus this saves me time on formatting by having my IDE automatically run my `lint --fix` on save.
- TailWindCSS: This will give me some basic styles out of the box, saving me time.

### Project setup
- The first step is clearing out the boilerplate files and rendering a simple page at the route: "/" with the text: "Users".

### Feature execution
blah
