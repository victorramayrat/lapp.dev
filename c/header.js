import { Pane, Popover, Button, Heading, Text, Link } from 'evergreen-ui'

export default function Header() {
  return (
    <div>
      <header>
      <Pane display="flex" padding={16} maxWidth={960} style={{margin:"auto"}}>
        <Pane flex={1} alignItems="center" display="flex" >
          <Heading size={600} color="orange">LApp.dev</Heading>
        </Pane>
        <Pane flex={1} alignItems="center" display="flex" justifyContent="flex-end">
          <Heading size={600}>
            <Link href="mailto:v@lapp.dev" marginRight={12} size={600} style={{textDecoration:"none", fontWeight:"bold"}}>Email Me</Link>
          </Heading>
        </Pane>
        </Pane>
      </header>
    </div>
  )
}