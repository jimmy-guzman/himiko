# himiko

> Another React form library but with re-render optimizations for controlled components

## Install

## Usage

Say you have a situation were want one form state but don't want certain pieces to rerender when one field changes.

You can start by using `<HimikoProvider />` and setting the initial state.

```tsx
import { HimikoProvider } from 'himiko'

const Checkout = () => {
  return (
    <HimikoProvider initialState={checkoutInitialState}>
      <NameInputs />
      <AddressInputs />
    </HimikoProvider>
  )
}
```

then simply use `useHimiko`

```tsx
import { useHimiko } from 'himiko'

const NameFormGroup = (): JSX.Element => {
  const [values, handleChange] = useHimikoContext()

  return (
    <>
      <input
        id="firstName"
        name="firstName"
        label="First name"
        value={values.firstName}
        onChange={handleChange}
      />
      <input
        id="lastName"
        name="lastName"
        label="Last name"
        value={values.lastName}
        onChange={handleChange}
      />
    </>
  )
}
```

## `useHimikoValues` and `useHimikoHandlers`

Then in your form sections you can simply leverage `useHimikoValues` and `useHimikoHandlers`

```tsx
import { useHimikoSelector, useHimikoValues } from 'himiko'

const NameFormGroup = (): JSX.Element => {
  const { handleChange } = useHimikoHandlers<CheckoutFormState>()
  const { firstName, lastName } = useHimikoValues<CheckoutFormState>()

  return (
    <>
      <input
        id="firstName"
        name="firstName"
        label="First name"
        value={firstName}
        onChange={handleChange}
      />
      <input
        id="lastName"
        name="lastName"
        label="Last name"
        value={lastName}
        onChange={handleChange}
      />
    </>
  )
}
```

Using these hooks allows only these components to rerender instead of the normal behavior of context providers where if any value changes in `<HimikoProvider />` any components that used it's context (`useContext`) will rerender

## `useHimikoSelector`

You can also grab any piece of the `HimikoContext` with `useHimikoSelector` and still reap benefits of `useHimikoValues` and `useHimikoHandlers`

`useHimikoSelector` takes a selector function similar to `useSelector` from `redux`

```tsx
import { useHimikoSelector } from 'himiko'

const NameFormGroup = (): JSX.Element => {
  const handleChange = useHimikoSelector((state) => state[1])
  const firstName = useHimikoSelector((state) => state[0].firstName)
  const lastName = useHimikoSelector((state) => state[0].lastName)

  return (
    <>
      <input
        id="firstName"
        name="firstName"
        label="First name"
        value={firstName}
        onChange={handleChange}
      />
      <input
        id="lastName"
        name="lastName"
        label="Last name"
        value={lastName}
        onChange={handleChange}
      />
    </>
  )
}
```

## `useHimikoContext`

Say you want the normal behavior of providers and don't need the optimizations you can use `useHimikoContext`

```tsx
import { useHimiko } from 'himiko'

const NameFormGroup = (): JSX.Element => {
  const [values, handleChange] = useHimikoContext()

  return (
    <>
      <input
        id="firstName"
        name="firstName"
        label="First name"
        value={firstName}
        onChange={handleChange}
      />
      <input
        id="lastName"
        name="lastName"
        label="Last name"
        value={lastName}
        onChange={handleChange}
      />
    </>
  )
}
```

## `useHimikoState`

Simple hook that is used underneath `<HimikoProvider />` to set and get form values

`handleChange` will use `name="firstName"` to update the correct state

```tsx
import { useHimiko } from 'himiko'

const NameFormGroup = (): JSX.Element => {
  const [values, handleChange] = useHimikoState({ firstName: '', lastName: '' })

  return (
    <>
      <input
        id="firstName"
        name="firstName"
        label="First name"
        value={firstName}
        onChange={handleChange}
      />
      <input
        id="lastName"
        name="lastName"
        label="Last name"
        value={lastName}
        onChange={handleChange}
      />
    </>
  )
}
```
