/* eslint-disable react/prop-types */
import Head from 'next/head'

import Layout from '../components/Layout/Layout'
import './styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import { motion } from 'framer-motion'

import { AuthProvider } from '../utils/AuthContext'

const App = ({ Component, pageProps, router }) => {
    return (
        <AuthProvider>
            <Layout>
                <Head>
                    <link
                        rel="icon"
                        href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/248/leaf-fluttering-in-wind_1f343.png"
                    />
                    <title>TradeWell</title>
                </Head>
                <div className="container">
                    <motion.div
                        key={router.route}
                        initial="pageInitial"
                        animate="pageAnimate"
                        variants={{
                            pageInitial: {
                                opacity: 0,
                            },
                            pageAnimate: {
                                opacity: 1,
                            },
                        }}
                    >
                        <Component {...pageProps} />
                    </motion.div>
                </div>
                <style jsx>{`
                    .container {
                        margin-top: 70px;
                    }
                `}</style>
            </Layout>
        </AuthProvider>
    )
}

export default App
