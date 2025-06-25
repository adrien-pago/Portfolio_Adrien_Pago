<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

class ContactController extends AbstractController
{
    #[Route('/contact/send', name: 'contact_send', methods: ['POST'])]
    public function send(Request $request, MailerInterface $mailer): Response
    {
        $nom = trim($request->request->get('name'));
        $email = trim($request->request->get('email'));
        $sujet = trim($request->request->get('subject'));
        $message = trim($request->request->get('message'));

        // Validation simple
        if (!$nom || !$email || !$sujet || !$message) {
            if ($request->isXmlHttpRequest()) {
                return $this->json(['success' => false, 'message' => 'Tous les champs sont obligatoires.'], 400);
            }
            $this->addFlash('danger', 'Tous les champs sont obligatoires.');
            return $this->redirectToRoute('app_contact');
        }

        // Préparation de l'email
        $mail = (new Email())
            ->from('portfolio@' . $request->getHost())
            ->to('adrien.pago@gmail.com')
            ->subject('Message')
            ->text(
                "Vous avez reçu un message de $nom <$email>\n\n" .
                $message
            );

        // Envoi
        try {
            $mailer->send($mail);
            if ($request->isXmlHttpRequest()) {
                return $this->json(['success' => true, 'message' => 'Votre message a bien été envoyé !']);
            }
            $this->addFlash('success', 'Votre message a bien été envoyé !');
        } catch (\Exception $e) {
            if ($request->isXmlHttpRequest()) {
                return $this->json(['success' => false, 'message' => "Erreur lors de l'envoi du message : " . $e->getMessage()], 500);
            }
            $this->addFlash('danger', "Erreur lors de l'envoi du message : " . $e->getMessage());
        }

        return $this->redirectToRoute('app_contact');
    }
} 