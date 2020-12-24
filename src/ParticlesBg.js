import React from 'react'
import Particles from 'react-particles-js'


const ParticlesBg = () => {
    return (
        <div>
            <Particles
                params={{
                    particles: {
                        number: { value: 100 },
                        color: { value: "#ffffff" },
                        size: { anim: { value: 6 } }

                    }
                }} />
        </div>
    )
}

export default ParticlesBg
