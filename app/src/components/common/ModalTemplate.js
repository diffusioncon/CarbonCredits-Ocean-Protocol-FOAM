import React from 'react'
import { Button, Modal, Card } from 'rimble-ui'

export default ({ isOpen, onClose, children }) =>
  <Modal isOpen={isOpen}>
    <Card width={'420px'} p={0}>
      <Button.Text
        icononly
        icon={'Close'}
        color={'moon-gray'}
        position={'absolute'}
        top={0}
        right={0}
        mt={3}
        mr={3}
        onClick={onClose}
      />
      {children}
    </Card>
  </Modal>
