import React, {
  useEffect,
  IframeHTMLAttributes,
  useCallback,
  useMemo,
} from "react"
import { Streamlit } from "streamlit-component-lib"
import { useRenderData } from "streamlit-component-lib-react-hooks"

const IFrame = () => {
  const { args: { attributes } = {} } = useRenderData() as {
    args: { attributes: IframeHTMLAttributes<HTMLIFrameElement> }
  }

  const origin = useMemo(
    () => attributes?.src?.split("/")?.slice(0, 3)?.join("/"),
    [attributes?.src]
  )

  const handleIframeMessage = useCallback(
    (e: MessageEvent): void => {
      if (e.origin !== origin) {
        return
      }
      Streamlit.setComponentValue(e.data)
    },
    [origin]
  )

  useEffect(() => {
    window?.addEventListener("message", handleIframeMessage)
    return () => {
      window?.removeEventListener("message", handleIframeMessage)
    }
  }, [handleIframeMessage, origin])

  const style = {
    ...defaultStyle,
    ...attributes?.style,
  }

  const title = attributes?.title || "st.iframe"
  return <iframe title={title} {...attributes} style={style} />
}

export default IFrame

const defaultStyle = {
  borderWidth: 0,
}
