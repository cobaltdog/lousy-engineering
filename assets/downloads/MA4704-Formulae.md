# MA4704 - Formulae

> MA4704 · AEROELASTICITY — exported from Lousy Engineering

---

## Uniform String Dynamics

Orthogonality principle of mode shapes,  
$\int^L_0\  \phi_i(x)\phi_j(x)\ dx =\begin{cases} 0&i\ne j\\\frac{L}{2}&i=j \end{cases}$  

---

### Free Vibration of a String

Free vibration response,  
$\nu(x,t) =\sum\limits^\infin\limits_{i=1}\  \sin\big(\frac{i\pi x}{L}\big) \bigg[ A_i\sin\Big( \sqrt{\frac{T}{\rho}} \frac{i\pi}{L}t\Big) +B_i\cos\Big( \sqrt{\frac{T}{\rho}} \frac{i\pi}{L}t\Big) \bigg]$  
$\nu(x,t) =\sum\limits^\infin\limits_{i=1}\  \sin\big(\frac{i\pi x}{L}\big) \Big[A_i\sin(\omega_it) +B_i\cos(\omega_it)\Big]$  
$\nu(x,t) =\sum\limits^\infin\limits_{i=1}\  \phi_i(x)\zeta_i(t)$  

Coefficients of vibration magnitude,  
$A_j =\frac{2}{j\pi} \sqrt{\frac{\rho}{T}} \int^l_0\  g(x)\sin\big(\frac{j\pi x}{l}\big) \ dx$   *where initial velocity condition *$\dot\nu(x,0)=g(x)$  
$B_j =\frac{2}{l}\int^l_0\  f(x)\sin\big(\frac{j\pi x}{l}\big) \ dx$   *where initial displacement condition *$\nu(x,0)=f(x)$  

---

### Forced Vibration of a String

Forced vibration response,  
$\nu(x,t) =\sum\limits^\infin\limits_{i=1}\  \sin\big(\frac{i\pi x}{L}\big) \Big[A_i\sin(\omega_it) +B_i\cos(\omega_it) +\zeta_{i,p}(t)\Big]$  
$\nu(x,t) =\sum\limits^\infin\limits_{i=1}\  \phi_i(x)\zeta_i(t)$  

Generalized force,  
$\Theta_i(t) =\int^L_0\  F(x,t)\phi_i(t)\ dx$   *(Distributed load : integrate as per normal)*  
$\Theta_i(t) =F_c(t)\phi_i(x_c)$   *(Concentrated load : replace *$x$* in *$\phi_i$* with location of applied load)*  

Equation of motion,  
$\Theta_i(t) =\Big(\frac{\rho L}{2}\Big) \ddot\zeta_i(t) +\Big(\frac{\rho L}{2} {\omega_i}^2\Big) \zeta_i(t)$  
$\frac{2}{\rho L}\Theta_i(t) =\ddot\zeta_i(t) +{\omega_i}^2\zeta_i(t)$  

General solution to 2nd ODE,  
$\zeta_i(t) =A_i\sin(\omega_it) +B_i\cos(\omega_it) +\zeta_{i,p}(t)$  
*3rd term represents particular solution 2nd ODE.  
If generalized force contains sine term, let *$\zeta_{i,p}(t)=C_p\sin(\Omega t)$*.  
Substitute *$\ddot\zeta_{i,p}(t)$* and *$\zeta_{i,p}(t)$* into equation of motion and solve for *$C_p$*.*  

Initial conditions,  
$\nu(x,0) =0\ \text{or given in Qns}$  
$\dot\nu(x,0) =0\ \text{or given in Qns}$  
*Substitute initial conditions into vibration response and solve for *$A_i$* and *$B_i$*.*  

## Uniform Beam Torsional Dynamics

Torsional vibration response,  
$\theta(y,t) =\sum\limits^\infin\limits_{i=1}\  \phi_i(y) \Big[ A_i\sin(\omega_it) +B_i\cos(\omega_it) +\zeta_{i,p}(t) \Big]$  
*where the 3rd term is omitted for free vibration of a beam*  

Natural frequencies,  
$\omega_i =\sqrt{\frac{G}{\rho}}\alpha_i =\sqrt{\frac{G}{\rho}} \frac{i\pi}{L}$   *(Clamped-clamped + free-free beams)*  
$\omega_i =\sqrt{\frac{G}{\rho}}\alpha_i =\sqrt{\frac{G}{\rho}} \frac{(2i-1)\pi}{2L}$   *(Clamped-free beam)*  

Mode shapes,  
$\phi_i(y) =\sin\big(\frac{i\pi y}{L}\big)$   *(Clamped-clamped beam)*  
$\phi_i(y) =\cos\big(\frac{i\pi y}{L}\big)$   *(Free-free beam)*  
$\phi_i(y) =\sin\Big[ \frac{(2i-1)\pi y}{2L}\Big]$   *(Clamped-free beam)*  

Equation of motion,  
$\Theta_i(t) =\Big(\frac{\rho LI_P}{2}\Big) \ddot\zeta_i(t) +\Big(\frac{\rho LI_P}{2} {\omega_i}^2\Big) \zeta_i(t)$  
$\frac{2}{\rho LI_P}\Theta_i(t) =\ddot\zeta_i(t) +{\omega_i}^2\zeta_i(t)$  

Initial conditions,  
$\theta(y,0) =\frac{T(y)\cdot L}{GI_P}$  
$\dot\theta(y,0) =0\ \text{or given in Qns}$  
*where *$I_P=\frac{\pi d^4}{32}$* for solid shafts and *$I_P=\frac{\pi}{32}({d_o}^4-{d_i}^4)$* for hollow shafts*  

## Uniform Beam Bending Dynamics

### Vibration of a Beam

Bending vibration response,  
$\nu(y,t) =\sum\limits^\infin\limits_{i=1}\  \phi_i(y) \Big[ A_i\sin(\omega_it) +B_i\cos(\omega_it) +\zeta_{i,p}(t) \Big]$  
*where the 3rd term is omitted for free vibration of a beam*  

Natural frequencies,  
$\omega_i =(\alpha_iL)^2 \sqrt{\frac{EI}{\rho AL^4}}$  
*where *$\alpha_iL=i\pi$* for pinned-pinned beam,   
and *$\alpha_iL$* is solved numerically for other beams*  

Mode shapes,  
$\phi_i(y) =\sin\big(\frac{i\pi y}{L}\big)$   *(Pinned-pinned beam)*  
$\phi_i(y) =\cosh(\alpha_iy) -\beta\sinh(\alpha_iy) -\cos(\alpha_iy) +\beta\sin(\alpha_iy)$   *(Clamped-free beam)*  
$\phi_i(y) =\cosh(\alpha_iy) -\beta\sinh(\alpha_iy) +\cos(\alpha_iy) -\beta\sin(\alpha_iy)$   *(Free-free beam)*  
$\phi_i(y) =\cosh(\alpha_iy) -\beta\sinh(\alpha_iy) -\cos(\alpha_iy) +\beta\sin(\alpha_iy)$   *(Clamped-clamped beam)*  

Coefficient $\beta$,  
$\beta_{i,CF} =\frac {\cosh(\alpha_il) +\cos(\alpha_il)} {\sinh(\alpha_il) +\sin(\alpha_il)}$   *(Clamped-free beam)*  
$\beta_{i,FF} =\frac {\sinh(\alpha_il) +\sin(\alpha_il)} {\cosh(\alpha_il) -\cos(\alpha_il)}$   *(Free-free beam)*  
$\beta_{i,CC} =\frac {\sinh(\alpha_il) +\sin(\alpha_il)} {\cosh(\alpha_il) -\cos(\alpha_il)}$   *(Clamped-clamped beam)*  

Solve for $\alpha L$ through trial and error.  
$0=\cosh(\alpha L)\cos(\alpha L)+1$   *(Clamped-free beam)*  
$1=\cosh(\alpha L)\cos(\alpha L)$   *(Free-free beam)*  
$1=\cosh(\alpha L)\cos(\alpha L)$   *(Clamped-clamped beam)*  

Equation of motion,  
$\Theta_i(t) =(\rho A\sigma_i) \ddot\zeta_i +(\rho A\sigma_i{\omega_i}^2) \zeta_i$  
*where *$\sigma_i =\int^L_0\  \phi_i(y)\phi_i(y)\ dy =\frac{L}{2}$  

---

### Lagrange Equation of Motion

Kinetic and potential energy of a beam in bending,  
$K =\frac12\int^L_0\ \rho A\Big( \frac{\partial\nu}{\partial t} \Big)^2\ dy$  
$P =\frac12\int^L_0\ EI\Big( \frac{\partial^2\nu}{\partial y^2} \Big)^2\ dy$  

Vibration pattern of a beam,  
$\nu(y,t) =q(t)\phi(y)$  
*Assume vibration pattern to be most representative lowest mode shape.*  
image.png  

Lagrange’s equation,  
$L=K-P$  

Lagrange equation of motion,  
$0 =\frac{d}{dt}\Big( \frac{\partial L}{\partial\dot q_i} \Big) -\frac{\partial L}{\partial q_i}$  
$0=a\ddot q+bq$  

Let $\ddot q=\phi\sin(\omega t)$ and solve for natural frequency.  
$0 =a\big[ -\omega^2\phi\sin(\omega t)\big] +b\phi\sin(\omega t)$  
$0=-a\omega^2+b$  
$\omega^2=\frac{b}{a}$  

## Unsteady Aerodynamics

### Pressure Difference

Local static pressures on upper and lower airfoil surfaces,  
$P_{upper} =-\frac12\rho\Big( U +\frac{\partial\phi_u}{\partial x} \Big)^2 -\rho \frac{\partial\phi_u}{\partial t} +Const.$  
$P_{lower} =-\frac12\rho\Big( U +\frac{\partial\phi_l}{\partial x} \Big)^2 -\rho \frac{\partial\phi_l}{\partial t} +Const.$  
*where velocity potential *$\phi_l=-\phi_u$  

Pressure difference between upper and lower surfaces,  
$\Delta P =P_{lower}-P_{upper}$  
$\Delta P =2\rho\Big(U \frac{\partial\phi_u}{\partial x} +\frac{\partial\phi_u}{\partial t} \Big)$  

---

### Non-Circulatory Lift & Moment

Non-circulatory lift,  
$L_{nc} =\int^b_{-b}\ \Delta P\ dx$  
$L_{nc} =\rho\pi b^2( U\dot\alpha-a\ddot\alpha-\ddot h)$  
*where *$a$*= distance between elastic axis and half-chord location*  

Non-circulatory moment,  
$M_{nc} =-\int^b_{-b}\ \Delta P(x-a)\ dx$  
$M_{nc} =\rho\pi b^2\Big[ a\ddot h+U\dot h+U^2a -\big(a^2+\frac{b^2}{8}\big) -\frac{c}{4}U\dot\alpha\Big]$  
*where *$a$*= distance between elastic axis and half-chord location*  

---

### Circulatory Lift & Moment

Pitching and heaving harmonic motion,  
$\alpha=A\sin(\omega t)$  
$h=B\sin(\omega t)$  
*where *$A$* & *$B$*= given amplitudes of harmonic motion  
and *$\omega$*= frequency of oscillation (harmonic motion)*  

Theodorsen function,  
$C(k) =1 -\frac{0.165}{1-(0.0455/k)i} -\frac{0.335}{1-(0.3/k)i}$  
*where reduced frequency *$k=\frac{\omega b}{U}$  

Circulatory lift,  
$L_c =2\pi\rho bU\cdot |C(k)|\cdot \Big[ U\alpha+\dot h -\big(a-\frac{b}{2}\big)\dot\alpha \Big]$  
*where *$|C(k)|$*= magnitude of Theodorsen function,  
and include phase lag *$\angle C(k)$* in the trigo functions*  
Circulatory lift (flat plate),  
$L_c=\frac12\rho U^2cC_L$  
$L_c =\frac12\rho U^2c (C_{L_\alpha}\alpha)$  

Circulatory moment,  
$M_c =-\rho\pi bU \Big[b-(2a+b)\cdot|C(k)|\Big] \Big[ U\alpha+\dot h -\big(a-\frac{b}{2}\big)\dot\alpha \Big]$  
*where *$|C(k)|$*= magnitude of Theodorsen function,  
and include phase lag *$\angle C(k)$* in the trigo functions*  

## Static Aeroelasticity

Wing angle of attack,  
$\alpha=\alpha_r+\theta$  
*where *$\alpha_r$*= rigid angle of attack  
and *$\theta$*= elastic deformation angle*  

Aerodynamic loads acting on wing,  
$L =\frac12\rho U^2S (C_{L_\alpha}\alpha) =qSC_{L_{\alpha}} (\alpha_r+\theta)$  
$M =\frac12\rho U^2ScC_{M_0} =qScC_{M_0}$  

Lift and moment coefficients (with flaps/ailerons),  
$C_L =C_{L_\alpha}\alpha +C_{L_\beta}\beta$  
$C_M=C_{M_0}+C_{M_\beta}\beta$  

Wing divergence,  
$\theta(q) =\frac{\text{Numerator}} {\text{Denominator}}$  
Denominator → zero such that $\theta(q)\rightarrow\infin$  

Flap/aileron reversal,  
$\frac{\partial L}{\partial\beta} =0$  

## Binary Aeroelastic Wing

### Bending-Torsion

Aeroelastic equation,  
$\{\bold 0\} =[\bold A]\{\bold{\ddot q}\} +\Big[\rho U[\bold B]+[\bold D] \Big]\{\bold{\dot q}\} +\Big[\rho U^2[\bold C]+[\bold E] \Big]\{\bold q\}$  
$\small\begin{Bmatrix} 0\\0 \end{Bmatrix} =\begin{bmatrix} I_\kappa&I_{\kappa\theta}\\ I_{\kappa\theta}&I_\theta \end{bmatrix} \begin{Bmatrix} \ddot\kappa\\\ddot\theta \end{Bmatrix} +\rho U\begin{bmatrix} b_{11}&0\\b_{21}&b_{22} \end{bmatrix} \begin{Bmatrix} \dot\kappa\\\dot\theta \end{Bmatrix} +\begin{bmatrix} \rho U^2\begin{bmatrix} 0&c_{12}\\0&c_{22} \end{bmatrix} +\begin{bmatrix} K_\kappa&0\\0&K_\theta \end{bmatrix} \end{bmatrix} \begin{Bmatrix} \kappa\\\theta \end{Bmatrix}$  
*where *$I_\kappa =\frac13ms^3c$*  
and *$I_{\kappa\theta} =\frac12ms^2 \big(\frac{c^2}{2}-x_fc\big)$*  
and *$I_\theta =ms\big( \frac{c^3}{3}-x_fc^2+{x_f}^2c\big)$  

Elements of $\begin{bmatrix} \bold B \end{bmatrix}$ matrix,  
$b_{11} =-\frac16cs^3C_{L_\alpha}$  
$b_{21} =\frac14ec^2s^2C_{L_\alpha}$  
$b_{22} =\frac18M_{\dot\theta}c^3s$  
Elements of $\begin{bmatrix} \bold C \end{bmatrix}$ matrix,  
$c_{12} =-\frac14cs^2C_{L_\alpha}$  
$c_{22} =\frac12ec^2sC_{L_\alpha}$  
*where *$c$*= chord   
and *$s$*= wing span   
and *$e$*= distance between *$ac$* and flexural axis*  

---

### Flutter Speed Prediction

Aeroelastic equation,  
$\{\bold 0\} =[\bold A]\{\bold{\ddot q}\} +\Big[\rho U[\bold B]+[\bold D] \Big]\{\bold{\dot q}\} +\Big[\rho U^2[\bold C]+[\bold E] \Big]\{\bold q\}$  
$\small\begin{Bmatrix} 0\\0 \end{Bmatrix} =\begin{bmatrix} a_{11}&a_{12}\\a_{21}&a_{22} \end{bmatrix} \begin{Bmatrix} \ddot h\\\ddot\alpha \end{Bmatrix} +U\begin{bmatrix} b_{11}&b_{12}\\b_{21}&b_{22} \end{bmatrix} \begin{Bmatrix} \dot h\\\dot\alpha \end{Bmatrix} +\begin{bmatrix} U^2\begin{bmatrix} c_{11}&c_{12}\\c_{21}&c_{22} \end{bmatrix} +\begin{bmatrix} e_{11}&0\\0&e_{22} \end{bmatrix} \end{bmatrix} \begin{Bmatrix} h\\\alpha \end{Bmatrix}$  

Divergence speed,  
$0=\det\begin{vmatrix} c_{11}{U_D}^2+e_{11}&c_{12}{U_D}^2\\ c_{21}{U_D}^2&c_{22}{U_D}^2+e_{22} \end{vmatrix}$  
$0 =(c_{11}{U_D}^2+e_{11}) (c_{22}{U_D}^2+e_{22}) -c_{12}c_{21}{U_D}^4$  
*Divergence is a behavior of static aeroelasticity.*  

Characteristic equation,  
$0 =s_4\lambda^4 +s_3\lambda^3 +s_2\lambda^2 +s_1\lambda +s_0$  
$0=s_4\omega^4 -is_3\omega^3 -s_2\omega^2 +is_1\omega+s_0$     $(\lambda=i\omega)$  
$0=s_4\omega^4 +is_3\omega^3 -s_2\omega^2 -is_1\omega +s_0$     $(\lambda=-i\omega)$  

Subtraction of above equations,  
$0 =i2s_3\omega^3 -i2s_1\omega$  
$0=s_3\omega^2-s_1$  
${\omega_F}^2 =\frac{s_1}{s_3}$  
Addition of above equations,  
$0=s_4\omega^4-s_2\omega^2+s_0$  
$0 =\frac{s_4{s_1}^2}{{s_3}^2} -\frac{s_2s_1}{s_3}+s_0$  
$0 =s_4{s_1}^2 -s_3s_2s_1 +{s_3}^2s_0$  

Flutter speeds,  
$U_{F1,2} =\sqrt{\frac{e_{11}}{x_{1,2}}}$  
*Critical flutter speed is the lower of the two.*  

Coefficients of characteristic equation,  
$s_4 =a_{11}a_{22} -a_{21}a_{12}$  
$s_3 =(a_{11}b_{22} +b_{11}a_{22} -a_{21}b_{12} -a_{12}b_{21})U$  
$s_2 =\Big[ (\mu a_{11}+a_{22})x +a_{11}c_{22} +b_{11}b_{22} +c_{11}a_{22} -a_{21}c_{12} -b_{12}b_{21} -c_{21}a_{12} \Big]U^2$  
$s_1 =\Big[ (\mu b_{11}+b_{22})x +b_{11}c_{22} +c_{11}b_{22} -b_{21}c_{12} -c_{21}b_{12} \Big]U^3$  
$s_0 =\Big[ \mu x^2 +(c_{22}+\mu c_{11})x +c_{11}c_{22} -c_{12}c_{21} \Big]U^4$  
*where *$\mu=\frac{e_{22}}{e_{11}}$* and *$e_{11}=xU^2$  
