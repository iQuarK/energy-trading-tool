This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the dependencies

```bash
npm i
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Some notes about the project

There are three pages, Seller, Buyer, and Both.

The last one shows both screens to check that the changes in values will be updated automatically in the Buyer screen.

the Sample file has three cases, I added a functionality to add more energy types. As I use the energy producer as the ID (that means that sellers would be able to create just one of each kind of energy producer), being, one solar, one gas, etc. So if you try to create another solar from the form, it will update (the operation is *upsert*) the existing one (this was to just not adding more complexity).

Currently, the flashing feature, which is crucial for indicating new value changes, is not implemented. I propose to keep the last state, and then, if anything is different for each row, use a CSS class that animates once this flashing is performed in the background. This feature, once implemented, will significantly enhance the user experience.

### Things to improve (IHMO)
The modal does not close automatically when the user Submits the form.
The naming convention, mainly *EnergyOffering*, is a bit ugly and makes long variable names.
I suggest refactoring the form fields, as my initial intention was to create domain-based ones instead of value-type ones, so they are a lot :-S.
I still need a few fields to find what units are used for the value.
The form should look more aligned.