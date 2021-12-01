import {
  AddressFormState,
  addressFormStateInitialState,
} from './address-form/address-form-model'

export type CheckoutFormState = AddressFormState

export const checkoutInitialState = {
  ...addressFormStateInitialState,
}
