import { useState } from 'react';
import classes from './index.module.css'

const SecondaryNav = () => {


    const [links, setLinks] = useState(
        [
            {
                name: 'Find a Store',
                url: '/'
            },
            {
                name: 'Help',
                url: '/about'
            },
            {
                name: 'Join Us',
                url: '/services'
            },
            {
                name: 'Sign In',
                url: '/contact'
            }
        ]
    )


    const gotoPage = () => {
        console.log('go to page')
    }

    return (
        <div className={classes.mainWrapper}>
            <div className={classes.innerWrapper}>
                <div className={classes.logoWrapper}>
                    <img className={classes.logo} src="/assets/icons/jordan-logo.png" alt="logo" />
                </div>

                <div className={classes.linksWrapper}>
                    <div className={classes.links}>
                        {
                            links.map((link, index) => {
                                return (
                                    <span className={classes.link} key={index} onClick={() => gotoPage()}>{link.name}</span>
                                )
                            })
                        }
                    </div>
                </div>

            </div>




        </div>
    )
}


export default SecondaryNav;