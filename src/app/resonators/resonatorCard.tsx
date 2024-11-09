"use client"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Card, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import testImage from "@/resonance.cdn/cdn/characters/icons/aalto.png"

export default function ResonatorCard() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [resonators, setResonators] = useState();
  useEffect(()=> {
    const getResonators = async ()=> {
      try {
        const response = await fetch("https://api.resonance.rest/characters");
        const result = await response.json();
        setResonators(result);
      } catch (error) {
        console.log(error);
      }
    }
    getResonators();
  }, [])

  return (
    <>
      <Button onPress={onOpen} fullWidth color="danger">Add new</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl" scrollBehavior="inside">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Resonators</ModalHeader>
              <ModalBody>
                {resonators.characters.map((resonator)=> (
                  <Card key={resonator} className="min-h-44">
                    <Image alt={`${resonator} image`} className="" height={128} width={128} src={testImage.src} />
                  </Card>
                ))}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
