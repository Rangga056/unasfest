import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

const dialog = () => {
    return (
        <Dialog.Root>

            <Dialog.Trigger>
                
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay />
                <Dialog.Content>
                    <h1>Hello</h1>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default dialog;