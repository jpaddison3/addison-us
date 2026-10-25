// This _document is designed to make Next.js play nice with SSR of Material UI
// see https://mui.com/material-ui/integrations/nextjs/#pages-router
import { Html, Head, Main, NextScript, DocumentProps, DocumentContext } from 'next/document'
import {
  DocumentHeadTags,
  DocumentHeadTagsProps,
  documentGetInitialProps,
} from '@mui/material-nextjs/v16-pagesRouter'

export default function MyDocument(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <Html lang="en">
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx: DocumentContext) => documentGetInitialProps(ctx)
