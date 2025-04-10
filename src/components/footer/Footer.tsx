import {GithubLogo, InstagramLogo, 
    LinkedinLogo 
} from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Blog Pessoal Generation | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
	                        <a href="https://www.linkedin.com/in/daniele-napoleao" target="_blank">
    	                    <LinkedinLogo size={48} weight='thin' />
                        </a>
                            <a href="https://www.instagram.com" target="_blank">
    	                    <InstagramLogo size={48} weight='thin' />
                        </a>
                            <a href="https://www.github.com/daniele-silveira" target="_blank">
    	                    <GithubLogo size={48} weight='thin' />
	                    </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer