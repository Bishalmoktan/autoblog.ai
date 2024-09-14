import BgGradient from '@/components/common/bg-gradient'
import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return <div className='flex justify-center items-center py-16'>
    <BgGradient>
    <SignUp />
    </BgGradient>
  </div>
}