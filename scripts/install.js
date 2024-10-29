import { cpSync, existsSync, rmSync } from 'fs'
import { join } from 'path'

const destination = join(
    process.env.INSTALL_DIRECTORY,
    "elytratrail"
)

console.log(destination)

if (existsSync(destination)) {
    rmSync(
        destination,
        { recursive: true }
    )
}

cpSync(
    join(__dirname, '..', 'src'),
    destination,
    { recursive: true }
)