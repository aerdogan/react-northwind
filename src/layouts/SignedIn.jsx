import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"></Image>
                <Dropdown pointing="top left" text="Ahmet">
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info" />
                    <Dropdown.Item onClick={ signOut } text="Çıkış yap" icon="sign-out" />
                </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
