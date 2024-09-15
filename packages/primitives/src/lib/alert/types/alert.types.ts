/**
 * @enum AlertState
 * 
 * Enum represent the state of Alert
 */
export enum AlertState {
  Open,
  Close
}

/**
 * @enum AlertType
 * 
 * Enum represent the state of Alert
 */
export enum AlertType {
  Default = 0,
  Primary,
  Secondary,
  Tertiary,
  Warning,
  Error,
  Success,
  Destructive
}

/**
 * @type NgxPrimerAlertType 
 * 
 * Representatate type of alert.
 */
export type NgxPrimerAlertType = keyof typeof AlertState;

/**
 * @type NgxPrimerAlertState
 * 
 * Represent the current state of Alert.
 */
export type NgxPrimerAlertState = keyof typeof AlertState