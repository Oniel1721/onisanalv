import Header from 'components/Header'
import Footer from 'components/Footer'
import style from './styles'

type LayoutProps = {
  children:any
}

const Layout = (props:LayoutProps) => {
  return (
      <>
        <Header />
        <main>
          {props.children}
        </main>
        <Footer/>
        <style jsx>{style}</style>
      </>
  )
}

export default Layout
