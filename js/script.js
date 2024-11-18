
        // Function nga nagkuha sa tambag base sa sintomas, gidugayon, ug severity
        function getAdvice(symptom, duration, severity) {
            // Template sa tambag base sa sintomas
            const adviceTemplate = {
                fever: [
                    'Stay hydrated and rest. Monitor your temperature.', // Tambag para sa hilanat
                    'Continue to hydrate; consult a doctor if fever exceeds 102°F.', // Tambag kung ang hilanat molapas sa 102°F
                    'Consider over-the-counter medications for fever relief.', // Tambag sa pagkuha og over-the-counter nga medisina
                    'If fever persists, seek medical advice.', // Kung magpadayon ang hilanat, pangitaa ang tambag sa doktor
                    'Keep monitoring symptoms; take note of any worsening signs.', // Bantayi ang mga sintomas ug tan-awa ang pag-uswag
                    'Rest is crucial; consult a healthcare provider if necessary.', // Importante ang pagpahulay; pangitaa ang doktor kung kinahanglan
                    'Stay cool; consider a lukewarm bath if feeling too hot.', // Magpabilin nga bugnaw; maglukewarm nga paligo kung init kaayo
                    'Monitor for other symptoms like rash or difficulty breathing.', // Bantayi ang uban pang sintomas sama sa rashes o kalisud sa pagginhawa
                    'Ensure nutrition; consider light meals if appetite is low.', // Siguraduhon ang nutrisyon; mag-light meals kung gamay ang gana
                    'Consult a physician if the fever lasts beyond 10 days.' // Pangitaa ang doktor kung ang hilanat molapas sa 10 ka adlaw
                ],
                cough: [
                    'Stay hydrated; consider warm fluids like herbal tea.', // Tambag para sa ubo
                    'Use a humidifier to ease coughing; avoid irritants.', // Gamita ang humidifier aron mapagaan ang ubo
                    'Consider over-the-counter cough suppressants.', // Tambag sa pagkuha og over-the-counter nga cough suppressants
                    'If cough persists, seek medical attention.', // Kung magpadayon ang ubo, pangitaa ang tambag sa doktor
                    'Monitor for other symptoms like fever or wheezing.', // Bantayi ang uban pang sintomas sama sa hilanat o wheezing
                    'Avoid smoking or exposure to smoke.', // Likayi ang pagpanigarilyo o pag-expose sa aso
                    'Gargle with salt water for throat irritation.', // Gargle og asin nga tubig para sa iritasyon sa tutunlan
                    'Practice deep breathing exercises to ease discomfort.', // Magpraktis og deep breathing exercises aron mapagaan ang kasakit
                    'Rest your voice if experiencing severe coughing.', // Pahuwaya ang imong tingog kung grabe ang ubo
                    'Consult a physician if cough lasts beyond 10 days.' // Pangitaa ang doktor kung ang ubo molapas sa 10 ka adlaw
                ],
                runny_nose: [
                    'Stay hydrated; use saline nasal sprays for relief.', // Tambag para sa runny nose
                    'Consider antihistamines if allergies are suspected.', // Gamita ang antihistamines kung nagduda ka nga allergy
                    'Avoid irritants such as smoke and strong odors.', // Likayi ang mga irritants sama sa aso ug kusog nga baho
                    'Monitor for signs of infection; see a doctor if needed.', // Bantayi ang mga timailhan sa impeksyon; pangitaa ang doktor kung kinahanglan
                    'Use a humidifier to keep air moist.', // Gamita ang humidifier aron mapabilin nga humid ang hangin
                    'Practice good hygiene; wash hands frequently.', // Praktis sa maayong hygiene; kanunay nga maghugas sa mga kamot
                    'Avoid touching your face to prevent further irritation.', // Likayi ang paghawid sa imong nawong aron malikayan ang dugang iritasyon
                    'Gently blow your nose; don’t force it.', // Hinay-hinay nga pag-ihap sa imong ilong; ayaw pugsa
                    'Consider over-the-counter decongestants if symptoms worsen.', // Gamita ang over-the-counter nga decongestants kung magka-grabe ang sintomas
                    'Seek medical advice if runny nose lasts beyond 10 days.' // Pangitaa ang tambag sa doktor kung ang runny nose molapas sa 10 ka adlaw
                ],
                sore_throat: [
                    'Gargle with warm salt water for relief.', // Tambag para sa sore throat
                    'Stay hydrated; consider warm fluids.', // Siguraduhon ang hydration; mag-consider og warm fluids
                    'Use throat lozenges or sprays for pain relief.', // Gamita ang throat lozenges o sprays para sa kasakit
                    'If symptoms worsen, seek medical attention.', // Kung magka-grabe ang sintomas, pangitaa ang tambag sa doktor
                    'Avoid irritants like smoke and strong smells.', // Likayi ang mga irritants sama sa aso ug kusog nga baho
                    'Rest your voice if it’s sore; avoid shouting or whispering.', // Pahuwaya ang imong tingog kung masakit; likayi ang pagsinggit o pag-whisper
                    'Consider over-the-counter pain relievers.', // Gamita ang over-the-counter nga pain relievers
                    'Monitor for fever or other symptoms of infection.', // Bantayi ang hilanat o uban pang sintomas sa impeksyon
                    'Eat soft foods to avoid further irritation.', // Kaon og malumo nga pagkaon aron malikayan ang dugang iritasyon
                    'Consult a physician if sore throat persists beyond 10 days.' // Pangitaa ang doktor kung ang sore throat molapas sa 10 ka adlaw
                ],
                body_aches: [
                    'Rest and hydrate; gentle stretching may help.', // Tambag para sa body aches
                    'Consider over-the-counter pain relief medications.', // Gamita ang over-the-counter nga pain relief medications
                    'Apply heat or cold packs to sore areas.', // Ibutang ang init o bugnaw nga mga pack sa masakit nga lugar
                    'Monitor for fever; consult a doctor if symptoms worsen.', // Bantayi ang hilanat; pangitaa ang doktor kung magka-grabe ang sintomas
                    'Stay active but avoid strenuous activities.', // Magpabilin nga aktibo pero likayi ang mga strenuous nga kalihokan
                    'Consider massage therapy for muscle relief.', // Gamita ang massage therapy para sa pagpaayo sa mga kaunoran
                    'Use topical analgesics for localized pain.', // Gamita ang topical analgesics para sa localized nga kasakit
                    'Ensure good sleep; consider relaxation techniques.', // Siguraduhon ang maayong pagkatulog; mag-consider og relaxation techniques
                    'Seek medical advice if body aches persist beyond 10 days.', // Pangitaa ang tambag sa doktor kung ang body aches molapas sa 10 ka adlaw
                    'Consult a healthcare provider for persistent or severe pain.' // Pangitaa ang healthcare provider para sa padayon o grabe nga kasakit
                ],
                headache: [
                    'Stay hydrated; drink plenty of water.', // Tambag para sa headache
                    'Consider over-the-counter pain relievers.', // Gamita ang over-the-counter nga pain relievers
                    'Rest in a quiet, dark room if possible.', // Pahuwaya sa hilom ug ngitngit nga kwarto kung mahimo
                    'Apply a cool compress to your forehead.', // Ibutang ang cool compress sa imong agtang
                    'Monitor for other symptoms like nausea or visual disturbances.', // Bantayi ang uban pang sintomas sama sa pagdali o mga problema sa panan-aw
                    'Avoid triggers such as bright lights or loud noises.', // Likayi ang mga triggers sama sa hayag nga suga o kusog nga tunog
                    'Consider relaxation techniques like deep breathing.', // Mag-consider og relaxation techniques sama sa deep breathing
                    'Seek medical advice if headaches become severe or persistent.', // Pangitaa ang tambag sa doktor kung ang headache mahimong grabe o padayon
                    'Keep a headache diary to track triggers and patterns.', // Maghimo og headache diary aron masubay ang mga triggers ug patterns
                    'Consult a physician if headaches last beyond 10 days.' // Pangitaa ang doktor kung ang headache molapas sa 10 ka adlaw
                ],
                diarrhea: [
                    'Stay hydrated; drink clear fluids to prevent dehydration.', // Tambag para sa diarrhea
                    'Avoid dairy, fatty foods, and caffeine.', // Likayi ang dairy, fatty foods, ug caffeine
                    'Consider over-the-counter medications for relief.', // Gamita ang over-the-counter nga medisina para sa pagpaayo
                    'Monitor for signs of dehydration; seek medical attention if severe.', // Bantayi ang mga timailhan sa dehydration; pangitaa ang tambag sa doktor kung grabe
                    'Eat bland foods like rice, bananas, and toast.', // Kaon og bland nga pagkaon sama sa kan-on, saging, ug toast
                    'Rest and avoid strenuous activities.', // Pahuwaya ug likayi ang mga strenuous nga kalihokan
                    'Consult a doctor if diarrhea persists beyond 48 hours.', // Pangitaa ang doktor kung ang diarrhea molapas sa 48 ka oras
                    'Seek medical advice if accompanied by fever or blood.', // Pangitaa ang tambag sa doktor kung adunay hilanat o dugo
                    'Reassess diet and hydration on Day 5.', // I-reassess ang diet ug hydration sa Ikalimang Adlaw
                    'Consult a physician if diarrhea lasts beyond 10 days.' // Pangitaa ang doktor kung ang diarrhea molapas sa 10 ka adlaw
                ],
                nausea: [
                    'Stay hydrated; drink clear fluids slowly.', // Tambag para sa nausea
                    'Consider ginger tea or crackers for relief.', // Gamita ang ginger tea o crackers para sa pagpaayo
                    'Avoid strong odors and greasy foods.', // Likayi ang kusog nga baho ug greasy nga pagkaon
                    'Rest and avoid sudden movements.', // Pahuwaya ug likayi ang mga kalihokan nga kalit
                    'Monitor for vomiting or severe symptoms.', // Bantayi ang pagdali o grabe nga mga sintomas
                    'Consider over-the-counter anti-nausea medications.', // Gamita ang over-the-counter nga anti-nausea medications
                    'Eat small, frequent meals if possible.', // Kaon og gamay, kanunay nga pagkaon kung mahimo
                    'Seek medical advice if nausea persists beyond 48 hours.', // Pangitaa ang tambag sa doktor kung ang nausea molapas sa 48 ka oras
                    'Consult a physician if severe or accompanied by other symptoms.', // Pangitaa ang doktor kung grabe o adunay uban pang sintomas
                    'Reassess symptoms and diet on Day 5.' // I-reassess ang mga sintomas ug diet sa Ikalimang Adlaw
                ],
                fatigue: [
                    'Rest and prioritize sleep; avoid overexertion.', // Tambag para sa fatigue
                    'Stay hydrated; drink plenty of fluids.', // Siguraduhon ang hydration; mag-inom og daghang likido
                    'Consider light exercise to boost energy levels.', // Mag-consider og light exercise aron mapalambo ang energy levels
                    'Monitor for other symptoms like fever or body aches.', // Bantayi ang uban pang sintomas sama sa hilanat o body aches
                    'Evaluate diet; ensure balanced nutrition.', // I-evaluate ang diet; siguraduhon ang balanced nutrition
                    'Consider relaxation techniques to reduce stress.', // Mag-consider og relaxation techniques aron mapakunhod ang stress
                    'Consult a healthcare provider if fatigue persists beyond 7 days.', // Pangitaa ang healthcare provider kung ang fatigue molapas sa 7 ka adlaw
                    'Seek medical advice for underlying conditions.', // Pangitaa ang tambag sa doktor para sa mga underlying conditions
                    'Reassess daily activity levels on Day 5.', // I-reassess ang daily activity levels sa Ikalimang Adlaw
                    'Consult a physician if fatigue lasts beyond 10 days.' // Pangitaa ang doktor kung ang fatigue molapas sa 10 ka adlaw
                ],
                skin_rashes: [
                    'Avoid scratching; keep the area clean and dry.', // Tambag para sa skin rashes
                    'Consider over-the-counter hydrocortisone cream for relief.', // Gamita ang over-the-counter nga hydrocortisone cream para sa pagpaayo
                    'Monitor for signs of infection; seek medical attention if needed.', // Bantayi ang mga timailhan sa impeksyon; pangitaa ang tambag sa doktor kung kinahanglan
                    'Avoid irritants and allergens; consider antihistamines.', // Likayi ang mga irritants ug allergens; mag-consider og antihistamines
                    'Keep track of any new products used on the skin.', // Bantayi ang bisan unsang bag-ong produkto nga gigamit sa panit
                    'Seek medical advice if rashes persist beyond 5 days.', // Pangitaa ang tambag sa doktor kung ang rashes molapas sa 5 ka adlaw
                    'Consult a dermatologist if symptoms worsen or spread.', // Pangitaa ang dermatologist kung magka-grabe o magkalat ang mga sintomas
                    'Reassess skincare routine on Day 3.', // I-reassess ang skincare routine sa Ikatulong Adlaw
                    'Consult a physician if rashes last beyond 10 days.', // Pangitaa ang doktor kung ang rashes molapas sa 10 ka adlaw
                    'Monitor for other symptoms like fever or swelling.' // Bantayi ang uban pang sintomas sama sa hilanat o paghubag
                ],
                dizziness: [
                    'Sit or lie down to prevent falls; rest until it passes.', // Tambag para sa dizziness
                    'Stay hydrated; drink water slowly.', // Siguraduhon ang hydration; mag-inom og tubig hinay-hinay
                    'Avoid sudden movements or changes in position.', // Likayi ang mga kalit nga kalihokan o pagbag-o sa posisyon
                    'Monitor for other symptoms like headache or nausea.', // Bantayi ang uban pang sintomas sama sa headache o nausea
                    'Consult a doctor if dizziness persists beyond 48 hours.', // Pangitaa ang doktor kung ang dizziness molapas sa 48 ka oras
                    'Consider over-the-counter medications for motion sickness.', // Gamita ang over-the-counter nga medisina para sa motion sickness
                    'Seek medical advice for underlying conditions if persistent.', // Pangitaa ang tambag sa doktor para sa mga underlying conditions kung padayon
                    'Reassess activity levels and avoid strenuous tasks.', // I-reassess ang activity levels ug likayi ang mga strenuous nga buluhaton
                    'Consult a physician if dizziness lasts beyond 10 days.', // Pangitaa ang doktor kung ang dizziness molapas sa 10 ka adlaw
                    'Monitor for changes in vision or hearing.' // Bantayi ang mga pagbag-o sa panan-aw o pagdungog
                ],
                loss_of_appetite: [
                    'Eat small, frequent meals; focus on nutrient-dense foods.', // Tambag para sa loss of appetite
                    'Stay hydrated; drink plenty of fluids.', // Siguraduhon ang hydration; mag-inom og daghang likido
                    'Consider consulting a nutritionist for dietary advice.', // Mag-consider og konsultasyon sa nutritionist para sa dietary advice
                    'Monitor for other symptoms like nausea or fatigue.', // Bantayi ang uban pang sintomas sama sa nausea o fatigue
                    'Avoid strong odors that may exacerbate loss of appetite.', // Likayi ang kusog nga baho nga makapagrabe sa pagkawala sa gana
                    'Seek medical advice if loss of appetite persists beyond 3 days.', // Pangitaa ang tambag sa doktor kung ang pagkawala sa gana molapas sa 3 ka adlaw
                    'Reassess dietary habits and adjust as needed.', // I-reassess ang dietary habits ug i-adjust kung kinahanglan
                    'Consult a physician if loss of appetite lasts beyond 10 days.', // Pangitaa ang doktor kung ang pagkawala sa gana molapas sa 10 ka adlaw
                    'Monitor for weight loss or other concerning symptoms.', // Bantayi ang pagnaug sa timbang o uban pang mga sintomas nga makapahadlok
                    'Consider trying new foods or recipes to entice appetite.' // Mag-consider og pagsulay og bag-ong pagkaon o resipe aron makapukaw sa gana
                ],
                difficulty_breathing: [
                    'Stay calm; practice deep breathing exercises.', // Tambag para sa difficulty breathing
                    'Sit upright to ease breathing; avoid lying down flat.', // Lingkod nga tuwid aron mapagaan ang pagginhawa; likayi ang pagkatulog nga patag
                    'Seek immediate medical attention if symptoms worsen.', // Pangitaa ang dali nga tambag sa doktor kung magka-grabe ang mga sintomas
                    'Monitor for other symptoms like chest pain or wheezing.', // Bantayi ang uban pang sintomas sama sa sakit sa dughan o wheezing
                    'Consider using a prescribed inhaler if applicable.', // Mag-consider og paggamit og prescribed inhaler kung angay
                    'Avoid triggers such as smoke and strong odors.', // Likayi ang mga triggers sama sa aso ug kusog nga baho
                    'Reassess respiratory status daily; keep track of symptoms.', // I-reassess ang respiratory status matag adlaw; bantayi ang mga sintomas
                    'Consult a healthcare provider if breathing difficulties persist.', // Pangitaa ang healthcare provider kung ang kalisud sa pagginhawa magpadayon
                    'Seek medical advice if symptoms last beyond 2 days.', // Pangitaa ang tambag sa doktor kung ang mga sintomas molapas sa 2 ka adlaw
                    'Consult a physician if difficulty breathing lasts beyond 10 days.' // Pangitaa ang doktor kung ang kalisud sa pagginhawa molapas sa 10 ka adlaw
                ],
                chest_pain: [
                    'Seek immediate medical attention if chest pain is severe.', // Tambag para sa chest pain
                    'Rest and avoid exertion until evaluated by a doctor.', // Pahuwaya ug likayi ang pagpaningkamot hangtod ma-evaluate sa doktor
                    'Monitor for other symptoms like difficulty breathing.', // Bantayi ang uban pang sintomas sama sa kalisud sa pagginhawa
                    'Keep track of pain triggers and patterns.', // Bantayi ang mga triggers sa kasakit ug mga pattern
                    'Consult a healthcare provider for evaluation if pain persists.', // Pangitaa ang healthcare provider para sa evaluation kung ang kasakit magpadayon
                    'Consider relaxation techniques to reduce anxiety.', // Mag-consider og relaxation techniques aron mapakunhod ang kabalaka
                    'Seek medical advice if chest pain lasts beyond 2 days.', // Pangitaa ang tambag sa doktor kung ang chest pain molapas sa 2 ka adlaw
                    'Reassess activity levels and avoid strenuous tasks.', // I-reassess ang activity levels ug likayi ang mga strenuous nga buluhaton
                    'Consult a physician if chest pain lasts beyond 10 days.', // Pangitaa ang doktor kung ang chest pain molapas sa 10 ka adlaw
                    'Monitor for any changes in symptoms and report to a doctor.' // Bantayi ang bisan unsang pagbag-o sa mga sintomas ug i-report sa doktor
                ],
                persistent_high_fever: [
                    'Seek immediate medical attention; persistent high fever is serious.', // Tambag para sa persistent high fever
                    'Stay hydrated and monitor temperature regularly.', // Siguraduhon ang hydration ug bantayi ang temperatura kanunay
                    'Consider over-the-counter medications for fever relief.', // Gamita ang over-the-counter nga medisina para sa pagpaayo sa hilanat
                    'Keep track of additional symptoms; seek further evaluation.', // Bantayi ang dugang sintomas; pangitaa ang dugang evaluation
                    'Consult a healthcare provider for testing if needed.', // Pangitaa ang healthcare provider para sa testing kung kinahanglan
                    'Rest is crucial; avoid physical exertion.', // Importante ang pagpahulay; likayi ang pisikal nga pagpaningkamot
                    'Reassess symptoms daily; keep a log of changes.', // I-reassess ang mga sintomas matag adlaw; bantayi ang mga pagbag-o
                    'Consult a physician if fever lasts beyond 3 days.', // Pangitaa ang doktor kung ang hilanat molapas sa 3 ka adlaw
                    'Seek medical advice for persistent fever lasting beyond 10 days.', // Pangitaa ang tambag sa doktor para sa padayon nga hilanat nga molapas sa 10 ka adlaw
                    'Monitor for signs of infection and report to a doctor.' // Bantayi ang mga timailhan sa impeksyon ug i-report sa doktor
                ]
            };
            
            return adviceTemplate[symptom][duration - 1]; // Nagbalik sa tambag base sa sintomas ug gidugayon
        }

        // Function nga nagkuha sa medisina base sa sintomas ug severity
        function getMedicine(symptom, severity) {
            // Template sa medisina base sa sintomas ug severity
            const medicineTemplate = {
                fever: {
                    mild: 'Paracetamol 500mg every 4-6 hours.', // Medisina para sa mild nga hilanat
                    moderate: 'Ibuprofen 400mg every 6-8 hours.', // Medisina para sa moderate nga hilanat
                    severe: 'Consult a physician for potential prescription medications.' // Pangitaa ang doktor para sa posible nga prescription medications
                },
                cough: {
                    mild: 'Dextromethorphan 10mg every 4 hours.', // Medisina para sa mild nga ubo
                    moderate: 'Guaifenesin 200mg every 4-6 hours.', // Medisina para sa moderate nga ubo
                    severe: 'Consult a physician for potential prescription medications.' // Pangitaa ang doktor para sa posible nga prescription medications
                },
                runny_nose: {
                    mild: 'Saline nasal spray as needed.', // Medisina para sa mild nga runny nose
                    moderate: 'Antihistamines like Cetirizine 10mg once daily.', // Medisina para sa moderate nga runny nose
                    severe: 'Consult a physician for potential prescription medications.' // Pangitaa ang doktor para sa posible nga prescription medications
                },
                sore_throat: {
                    mild: 'Throat lozenges as needed.', // Medisina para sa mild nga sore throat
                    moderate: 'Ibuprofen 400mg for pain relief.', // Medisina para sa moderate nga sore throat
                    severe: 'Consult a physician for potential prescription medications.' // Pangitaa ang doktor para sa posible nga prescription medications
                },
                body_aches: {
                    mild: 'Paracetamol 500mg for pain relief.', // Medisina para sa mild nga body aches
                    moderate: 'Ibuprofen 400mg for pain relief.', // Medisina para sa moderate nga body aches
                    severe: 'Consult a physician for potential prescription medications.' // Pangitaa ang doktor para sa posible nga prescription medications
                },
                headache: {
                    mild: 'Paracetamol 500mg for relief.', // Medisina para sa mild nga headache
                    moderate: 'Ibuprofen 400mg for relief.', // Medisina para sa moderate nga headache
                    severe: 'Consult a physician for potential prescription medications.' // Pangitaa ang doktor para sa posible nga prescription medications
                },
                diarrhea: {
                    mild: 'Loperamide 2mg after the first loose stool.', // Medisina para sa mild nga diarrhea
                    moderate: 'Consult a healthcare provider for further advice.', // Pangitaa ang healthcare provider para sa dugang tambag
                    severe: 'Seek medical attention for evaluation.' // Pangitaa ang tambag sa doktor para sa evaluation
                },
                nausea: {
                    mild: 'Ginger tea as needed.', // Medisina para sa mild nga nausea
                    moderate: 'Antacids or over-the-counter anti-nausea medications.', // Medisina para sa moderate nga nausea
                    severe: 'Consult a physician for potential prescription medications.' // Pangitaa ang doktor para sa posible nga prescription medications
                },
                fatigue: {
                    mild: 'Increase hydration and rest.', // Medisina para sa mild nga fatigue
                    moderate: 'Consider a multivitamin supplement.', // Medisina para sa moderate nga fatigue
                    severe: 'Consult a physician for potential underlying issues.' // Pangitaa ang doktor para sa posible nga underlying issues
                },
                skin_rashes: {
                    mild: 'Hydrocortisone cream for irritation.', // Medisina para sa mild nga skin rashes
                    moderate: 'Antihistamines for allergic reactions.', // Medisina para sa moderate nga skin rashes
                    severe: 'Consult a dermatologist for further evaluation.' // Pangitaa ang dermatologist para sa dugang evaluation
                },
                dizziness: {
                    mild: 'Rest and hydrate.', // Medisina para sa mild nga dizziness
                    moderate: 'Consult a healthcare provider for evaluation.', // Pangitaa ang healthcare provider para sa evaluation
                    severe: 'Seek immediate medical attention if severe.' // Pangitaa ang dali nga tambag sa doktor kung grabe
                },
                loss_of_appetite: {
                    mild: 'Light snacks and hydration.', // Medisina para sa mild nga loss of appetite
                    moderate: 'Nutritional shakes or supplements.', // Medisina para sa moderate nga loss of appetite
                    severe: 'Consult a physician for dietary guidance.' // Pangitaa ang doktor para sa dietary guidance
                },
                difficulty_breathing: {
                    mild: 'Practice deep breathing exercises.', // Medisina para sa mild nga difficulty breathing
                    moderate: 'Consult a physician for possible inhaler.', // Pangitaa ang doktor para sa posible nga inhaler
                    severe: 'Seek immediate medical attention.' // Pangitaa ang dali nga tambag sa doktor
                },
                chest_pain: {
                    mild: 'Rest and avoid exertion.', // Medisina para sa mild nga chest pain
                    moderate: 'Consult a physician for evaluation.', // Pangitaa ang doktor para sa evaluation
                    severe: 'Seek immediate medical attention.' // Pangitaa ang dali nga tambag sa doktor
                },
                persistent_high_fever: {
                    mild: 'Paracetamol for fever relief.', // Medisina para sa mild nga persistent high fever
                    moderate: 'Ibuprofen for fever and pain relief.', // Medisina para sa moderate nga persistent high fever
                    severe: 'Seek immediate medical attention.' // Pangitaa ang dali nga tambag sa doktor
                }
            };
            
            return medicineTemplate[symptom][severity]; // Nagbalik sa rekomendadong medisina base sa sintomas ug severity
        }

        // Function nga nagpakita sa tambag ug medisina sa webpage
        function showAdvice() {
            const symptom = document.getElementById('symptom').value; // Kuhaon ang napiling sintomas
            const duration = parseInt(document.getElementById('duration').value); // Kuhaon ang gidugayon
            const severity = document.getElementById('severity').value; // Kuhaon ang severity

            const advice = getAdvice(symptom, duration, severity); // Tawagon ang getAdvice function
            const medicine = getMedicine(symptom, severity); // Tawagon ang getMedicine function

            document.getElementById('advice').innerText = `Advice: ${advice}`; // Ipakita ang tambag
            document.getElementById('medicine').innerText = `Recommended Medicine: ${medicine}`; // Ipakita ang rekomendadong medisina
        }

