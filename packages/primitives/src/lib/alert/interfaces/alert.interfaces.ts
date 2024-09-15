export interface AutoHideAlert {
  /**
   * Weteher auto hide alert enabled
   */
  enabled: boolean,

  /**
   * Wether delay for auto hide alert.
   */
  delay: number
}

export interface NgxPrimerAlertRootInterface {
  /**
   * Wheter the alert is dismissable.
   */
  dismissable: boolean;

  /**
   * Wether enable auto hide alert after a specific delay.
   */
  autoHide: AutoHideAlert
}
