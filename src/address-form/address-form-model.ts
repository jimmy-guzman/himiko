export interface AddressFormState {
  address1: string
  address2: string
  city: string
  country: string
  firstName: string
  lastName: string
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
  state: '',
  zip: '',
}
