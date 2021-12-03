export interface AddressFormState {
  address1: string
  address2: string
  city: string
  country: string
  firstName: string
  lastName: string
  shouldSaveAddress: boolean
  state: string
  zip: string
}

export const addressFormStateInitialState: AddressFormState = {
  address1: '',
  address2: '',
  city: '',
  country: '',
  firstName: '',
  lastName: '',
  shouldSaveAddress: false,
  state: '',
  zip: '',
}
