import React, { IframeHTMLAttributes, ReactNode } from "react"
import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"

/**
 * This is a React-based component template. The `render()` function is called
 * automatically when your component should be re-rendered.
 */
class IFrame extends StreamlitComponentBase {
  private handleIframeMessage = (e: MessageEvent): void => {
    Streamlit.setComponentValue(e.data)
  }

  componentDidMount(): void {
    window?.addEventListener("message", this.handleIframeMessage)
  }

  componentWillUnmount(): void {
    window?.removeEventListener("message", this.handleIframeMessage)
  }

  public render = (): ReactNode => {
    const args: IframeHTMLAttributes<HTMLIFrameElement> =
      this.props.args["attributes"]

    return (
      <span>
        <iframe
          className="stIFrame"
          data-testid="stIFrame"
          title="st.iframe"
          {...args}
        />
      </span>
    )
  }
}

export default withStreamlitConnection(IFrame)
