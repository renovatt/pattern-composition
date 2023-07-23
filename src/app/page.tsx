'use client'

import { Modal } from '@/components/Modal'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { GoIssueClosed } from 'react-icons/go'
import { GiGearStickPattern } from 'react-icons/gi'
import { useToggle } from '@/hook/useToogle'

export default function Home() {
  const { modal, openModal, closeModal } = useToggle();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <button
        className='rounded flex items-center justify-center font-bold p-2 bg-white text-zinc-500'
        onClick={openModal}>
        Aplicando Pattern de Composição
      </button>

      <Modal.Root isOpen={modal}>
        <Modal.Actions>
          <Modal.Action onClick={closeModal} icon={IoIosCloseCircleOutline} className='absolute top-2 right-2 w-5 h-5 bg-zinc-500' />
        </Modal.Actions>

        <Modal.Icon icon={GiGearStickPattern} className='border border-violet-600 text-violet-600' />
        <Modal.Content text='Aplicando Pattern de Composição' />

        <Modal.Actions>
          <Modal.Action icon={IoIosCloseCircleOutline} className='bg-red-600 hover:bg-red-700' />
          <Modal.Action icon={GoIssueClosed} className='bg-green-600 hover:bg-green-700' />
        </Modal.Actions>
      </Modal.Root>
    </main>
  )
}
