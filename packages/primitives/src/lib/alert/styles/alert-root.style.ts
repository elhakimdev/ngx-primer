import { NgxPrimerAlertType } from "./../index"
import { cva } from "class-variance-authority"

export const ngxAlertRootVariants = (options: {
  type: NgxPrimerAlertType
}) => {

  const { type } = options;

  return cva(["alert-base-root-variants"], {
    variants: {
      type: {
        "Open": "",
        "Close": "",
        "Default": "",
        "Primary": "",
        "Secondary": "",
        "Tertiary": "",
        "Warning": "",
        "Error": "",
        "Success": "",
        "Destructive": ""
      },
      size: {}
    }
  })({
    type: type
  })
}