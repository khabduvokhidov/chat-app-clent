import React from 'react'
import {Modal} from "@mantine/core"
import { PostShare } from '../PostShare/PostShare'


export default function ShereModal({openModal, setOpenModal}) {
  return (
    <Modal
      overlayOpacity={0.55}
      overlayBlur={3}
      size="50%"
      opened={openModal}
      onClose={()=> setOpenModal(false)}
    >
      <PostShare />
    </Modal>
  )
}
