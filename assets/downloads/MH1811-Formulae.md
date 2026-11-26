# MH1811 - Formulae

> MH1811 · MATHEMATICS 2 — exported from Lousy Engineering

---

## Functions of Several Variables

**Equation of a Circle**  
$(x-a)^2+(y-b)^2=r^2$ where $r>0$  

**Equation an an Ellipse**  
$\frac{\alpha(x-a)^2}{\alpha^2} +\frac{\beta(y-b)^2}{\beta^2}=1$  
where $\alpha>0$, $\beta>0$ and $r>0$  
*Taking square root of the denominator gives the radius in the axis.*  

**Equation of a Plane**  
$ax+by+cz=d$  
Coefficients make up the normal vector $\bold n=(a,b,c)$ to the plane  

**Equation of a Sphere**  
$(x-a)^2+(y-b)^2+(z-c)^2=r^2$ where $r>0$  

**Equation of an Ellipsoid**  
$\alpha(x-a)^2+\beta(y-b)^2+\gamma(z-c)^2=r^2$  
where $\alpha>0$, $\beta>0$, $\gamma>0$ and $r>0$  

## Partial Derivatives

**Definition of Partial Derivatives**  
$f_x(a.b) =\lim\limits_{t\rightarrow a}\  \frac{f(t,b)-f(a,b)}{t-a}$  

**Gradient Vectors**  
$\nabla f(x,y)=(f_x,f_y,f_z)=\frac{\partial f}{\partial x}\bold i+\frac{\partial f}{\partial y}\bold j+\frac{\partial f}{\partial z}\bold k$  

**Chain Rule**  
$w=f(x,y,z)$ where $x(t)$, $y(t)$ and $z(t)$  
$\frac{dw}{dt}=\frac{\partial w}{\partial x}\cdot\frac{dx}{dt}+\frac{\partial w}{\partial y}\cdot\frac{dy}{dt}+\frac{\partial w}{\partial z}\cdot\frac{dz}{dt}$  

$w=f(x,y)$ where $x(s,t,u)$ and $y(s,t,u)$  
$\frac{\partial w}{\partial s} =\frac{\partial w}{\partial x} \cdot\frac{\partial x}{\partial s} +\frac{\partial w}{\partial y} \cdot\frac{\partial y}{\partial s}$  
$\frac{\partial w}{\partial t} =\frac{\partial w}{\partial x} \cdot\frac{\partial x}{\partial t} +\frac{\partial w}{\partial y} \cdot\frac{\partial y}{\partial t}$  
$\frac{\partial w}{\partial u} =\frac{\partial w}{\partial x} \cdot\frac{\partial x}{\partial u} +\frac{\partial w}{\partial y} \cdot\frac{\partial y}{\partial u}$  

**Implicit Differentiation**  
$z$ is defined as a function of $x$ and $y$ by an equation $F(x,y,z)=const$  
$\frac{\partial F}{\partial x}\cdot\frac{\partial x}{\partial x}+\frac{\partial F}{\partial y}\cdot\frac{\partial y}{\partial x}+\frac{\partial F}{\partial z}\cdot\frac{\partial z}{\partial x}=0$  
$\frac{\partial F}{\partial x}\cdot1+\frac{\partial F}{\partial y}\cdot0+\frac{\partial F}{\partial z}\cdot\frac{\partial z}{\partial x}=0$  
$\frac{\partial F}{\partial x}+\frac{\partial F}{\partial z}\cdot\frac{\partial z}{\partial x}=0$  
$\frac{\partial z}{\partial x}=\frac{-F_x}{F_z}$  

## Gradient Vectors

### Tangent Plane and Normal Line

**Equation of Tangent Plane to Level Surface **$F(x,y,z)$  
$\nabla F(x_0,\ y_0,\ z_0)\cdot (x-x_0\ , y-y_0,\  z-z_0) =0$  
$F_x(x-x_0)+F_y(y-y_0)+F_z(z-z_0)=0$  
$\frac{\partial F}{\partial x} (x-x_0)+ \frac{\partial F}{\partial y} (y-y_0)+ \frac{\partial F}{\partial z} (z-z_0)=0$  

**Equation of Normal Line to Level Surface **$F(x,y,z)$  
$\bold r =(x_0,\ y_0,\ z_0) +t\nabla F(x_0,\ y_0,\ z_0)$  
$x=x_0 +t\frac{\partial F}{\partial x}$  
$y=y_0 +t\frac{\partial F}{\partial y}$  
$z=z_0 +t\frac{\partial F}{\partial z}$  

**Equation of Tangent Plane to **$z=f(x,y)$  
$F(x,y,z)=0$  
$F(x,y,z)=f(x,y)-z$  

$\nabla F\cdot (x-x_0,\ y-y_0,\ z-z_0) =0$  
$(f_x,\ f_y,\ -1) \cdot(x-x_0,\ y-y_0,\ z-z_0)=0$  
$f_x(x-x_0)+f_y(y-y_0) -(z-z_0)=0$  
$z=z_0+f_x(x-x_0)+f_y(y-y_0)$  
$z=f(x_0,\ y_0) +f_x(x-x_0)+f_y(y-y_0)$  
$z=f(x_0,\ y_0)+ \nabla f\cdot(x-x_0,\ y-y_0)$  

### Linear Approximation and Total Differentials

**Linear Approximation**  
$f(x,y)\approx f(a,b) +\nabla f(a,b) \cdot(x-a,\ y-b)$  
$L(x,y)=f(a,b) +f_x(a,b)\cdot(x-a) +f_y(a,b)\cdot(y-b)$  

**Total Differentials**  
$L(x,y)=f(a,b) +f_x(a,b)\cdot(x-a) +f_y(a,b)\cdot(y-b)$  
$L(x,y)-f(a,b)= f_x(a,b)\cdot(x-a) +f_y(a,b)\cdot(y-b)$  
$L(a+\Delta x,\ b+\Delta y) -f(a,b)= f_x(a,b)\cdot\Delta x +f_y(a,b)\cdot\Delta y$  
$df= f_x(a,b)\cdot\Delta x +f_y(a,b)\cdot\Delta y$  
$df= \nabla f(a,b) \cdot(\Delta x,\Delta y)$  

$\Delta f =f(a+\Delta x,\ b+\Delta y)-f(a,b)$  
$\Delta f\approx  L(a+\Delta x,\ b+\Delta y)-f(a,b)$  
$\Delta f\approx df$  

### Directional Derivatives and Max/Min Rate of Change

**Directional Derivatives**  
Unit vector $\bold u=\frac{\bold v}{|\bold v|}$  
$D_u\ f(x,y) =\nabla f(x,y)\cdot\bold u$  
$D_u\ f(x,y) =f_x(x,y)u_1 +f_y(x,y)u_2$  

**Maximum and Minimum Rate of Change**  
At a point $P(a,b)$, the directional derivative is the rate of change of $f$ in the direction $\bold u$.  
$D_u\ f(P) =\nabla f(P)\cdot\bold u$  
$D_u\ f(P)=|\nabla f(P)||\bold u|cos\theta$  
$D_u\ f(P)=|\nabla f(P)|cos\theta$  

Since $\nabla f(P)$ is constant, the directional derivative is dependent on the angle $\theta$.   
From observation, maximum value of $D_u\ f(P)$ is when $cos\theta=1$, where $\theta=0$.   
Maximum value is when $\bold u$ has the same direction as gradient vector $\nabla f(P)$and   
minimum value is when $cos\theta=-1$, where $\theta=\pi$, and $\bold u$ is in the opposite direction.  

$D_{u_{max}}=|\nabla f(P)|$  
$\bold{u_{max}} =\frac{\nabla f(P)}{|\nabla f(P)|}$  
$D_{u_{min}}=-|\nabla f(P)|$  
$\bold{u_{min}} =-\frac{\nabla f(P)} {|\nabla f(P)|}$  

## Global and Local Extrema

### Maximum, Minimum and Saddle Points

A function has a global maximum and minimum when:  
- Function is continuous
- Closed and bounded

**Local Extrema**  
$\nabla f(a,b)=(0,0)$ where $f_x=0$ and $f_y=0$  

Singular point if either $f_x=0$ or $f_y=0$ does not exist  
Stationary point if both $f_x=0$ and $f_y=0$ exist  
Critical point if $(a,b)$ is a singular or stationary point  
Saddle point if $(a,b)$ is a stationary point but not a local maximum or minimum  

**Second Derivative Test for Local Extrema**  
$D(a,b)= \begin{vmatrix} f_{xx}&f_{xy}\\ f_{yx}&f_{yy} \end{vmatrix}$  
$D(a,b) =f_{xx}\cdot f_{yy} -{f_{xy}}^2$  

If $D>0$ and $f_{xx}>0$, then $f(a,b)$ is a local minimum.  
If $D>0$ and $f_{xx}<0$, then $f(a,b)$ is a local maximum.  
If $D<0$, then $f(a,b)$ is a saddle point.  
If $D=0$, the test gives no information.  

*The second derivative test is not applicable to functions of 3 or more variables.*  

### Langrangian Function

**Langrangian Function**  
$L(x,y,\lambda) =f(x,y) -\lambda\cdot g(x,y)$ subject to a constraint $g(x,y)=0$  
$L_x=f_x-\lambda g_x=0$  
$L_y=f_y-\lambda g_y=0$  
$L_\lambda=-g=0$  

**Langrange Multiplier for One Equality Constraint**  
Find all values of $x$, $y$ and $\lambda$ such that $\nabla f(x,y)=\lambda\nabla g(x,y)$.  
$g(x,y)=k$ is the constraint function. Evaluate $f$ at all points $(x,y)$ that are found.  
Largest of these values is the maximum while smallest of these values is the minimum.  

**Langrange Multiplier for Two Equality Constraints**  
$L(x,y,z,\lambda,\mu) =f(x,y,x) -\lambda\cdot g(x,y,z) -\mu\cdot h(x,y,z)$  

## Double and Triple Integrals

### Iterated Integrals

Suppose $f(x,y)$ is integrable over the rectangle $R=[a,b]\times[c,d]$. Volume   
under the surface can be obtained by integrating w.r.t. $y$, then integrating w.r.t. $x$.  

$\iint_R\ f(x,y)\ dA =\int^b_a\int^d_c\ f(x,y)\ dydx =\int^d_c\int^b_a\ f(x,y)\ dxdy$  

### Double Integrals

**Type 1 Regions**  
$x$ is bounded between two constants — $a$ and $b$.  
$y$ is bounded between two functions of $x$ — $g(x)$.  

$D=\{(x,y):a\leq x\leq b,\ g_1(x)\leq y\leq g_2(x)\}$  
$\iint_D\ f(x,y)\ dA =\int^b_a\int^{g_2(x)}_{g_1(x)} \ f(x,y)\ dydx$  
Acrobat_NHW822kKra.png  

**Type 2 Regions**  
$x$ is bounded between two functions of $y$ — $h(y)$.  
$y$ is bounded between two constants — $c$ and $d$.  

$D=\{(x,y):c\leq y\leq d,\ h_1(y)\leq x\leq h_2(y)\}$  
$\iint_D\ f(x,y)\ dA =\int^d_c\int^{h_2(y)}_{h_1(y)} \ f(x,y)\ dxdy$  
Acrobat_T3u9Wy2MbQ.png  

**Changing the Order of Integration**  
Sketch the region of integration.  
Re-describe the limits that bound the values of $x$ and $y$.  

$\int^b_a\int^d_c\ f(x,y)\ dydx =\int^?_?\int^?_?\ f(x,y)\ dxdy$  

### Triple Integrals

A rectangular block $D$ is described by $[a,b]\times[c,d]\times[e,f]$.  
$\iint_D\ f(x,y,z)\ dV =\int^b_a\int^d_c\int^f_e\  f(x,y,z)\ dzdydx$  

## Sequences

**Definition of Limit of a Sequence**  
The sequence $\{a_n\}$ converges to the number $L$ if for every $\epsilon>0$, there corresponds   
an integer $N$ such that for all $n$, where $n>N \ \longrightarrow\  |a_n-L|<\epsilon$. In other words,   
the value of $a_n$ is within $\epsilon$ of $L$.  

**Properties of Limits**  
$\lim\limits_{n\rightarrow\infin} \ (C\cdot a_n)=C\ \lim\limits_{n\rightarrow\infin} \ a_n$  
$\lim\limits_{n\rightarrow\infin} \ (a_n\pm b_n)= \lim\limits_{n\rightarrow\infin} \ a_n\pm \lim\limits_{n\rightarrow\infin} \ b_n$  
$\lim\limits_{n\rightarrow\infin} \ (a_n\cdot b_n)= \lim\limits_{n\rightarrow\infin} \ a_n\cdot \lim\limits_{n\rightarrow\infin} \ b_n$  
$\lim\limits_{n\rightarrow\infin} \ \frac{a_n}{b_n}=\frac {\lim\limits_{n\rightarrow\infin}\ a_n}{\lim\limits_{n\rightarrow\infin}\ b_n}$ provided that $\lim\limits_{n\rightarrow\infin}\ b_n\neq0$ and $b_n\neq0$ for all $n$  

**Interchanging Limits**  
$\lim\limits_{n\rightarrow\infin} \ sin\frac1n=sin\Big(\lim\limits_{n\rightarrow\infin} \ \frac1n\Big)=sin0=0$  
$\lim\limits_{n\rightarrow\infin} \ e^{\frac1n}= e^{\lim\limits_{n\rightarrow\infin}\ \frac1n}=e^0=1$  
$\lim\limits_{n\rightarrow\infin} \ \Big(\frac{n^2}{n^2+3}\Big)^3 =\Big(\lim\limits_{n\rightarrow\infin}\ \frac{n^2}{n^2+3}\Big)^3=1^3=1$  
$\lim\limits_{n\rightarrow\infin} \ \sqrt{\frac{n^2}{n^2+3}}=\sqrt{\lim\limits_{n\rightarrow\infin}\ \frac{n^2}{n^2+3}} =\sqrt1=1$  

**Subsequences**  
If $\lim\limits_{n\rightarrow\infin}\ a_n=L$, then every subsequence of $\{a_n\}$ converges to $L$.  

**Squeeze Theorem**  
$\lim\limits_{n\rightarrow\infin} \frac{3^n}{n!}=\ ?$  

$\frac{3^n}{n!}= \frac31\cdot \frac32\cdot \frac33\cdot \frac34... \frac3{n-2}\cdot \frac3{n-1}\cdot \frac3{n}$  
Each subsequent term after the third is smaller than 1.  
Thus, the upper bound of the sequence is $\frac31\cdot\frac32\cdot\frac33 \cdot\frac3n=\frac{27}{2n}$.  
The limit can be found by using the inequality $0<\frac{3^n}{n!}<\frac{27}{2n}$.  

**Fitting with a Function**  
When a sequence $\{a_n\}$ can be fitted by a function $f(x)$, we can apply L’Hopital’s Rule.  

**Monotone Convergence Theorem**  
By Monotone Convergence Theorem, every bounded monotonic sequence is convergent.  

A sequence is monotonic if it is either non-decreasing or non-increasing.  
For every $n\geq n_0$, if $a_n\leq a_{n+1}$, the sequence is non-decreasing.  
For every $n\geq n_0$, if $a_n\geq a_{n+1}$, the sequence is non-increasing.  

Non-decreasing if:  
- $a_{n+1}-a_n\geq 0$
- $\frac{a_{n+1}}{a_n}\geq 1$ where $a_n>0$
- $f'(x)\geq 0$ where $x\geq n_0$
Non-increasing if:  
- $a_{n+1}-a_n\leq 0$
- $\frac{a_{n+1}}{a_n}\leq 1$ where $a_n>0$
- $f'(x)\leq 0$ where $x\geq n_0$

A sequence $\{a_n\}$ is said to be bounded if $m\leq a_n\leq M$ for every $n$.  
$M$ is an upper bound while $m$ is a lower bound of the sequence.  
A bounded sequence may not always be convergent.  

## Series

### Common Series

**Geometric Series**  
Geometric sequence is a sequence $\{ar^n\}^\infin_{n=0}$ where $a\neq 0$ is a constant.  
The common ratio $r=\frac{a_{n+1}}{a_n}$ is also a constant.  

$\sum\limits_{n=0}\limits^\infin ar^n=a+ar+ar^2+...+ar^n$   
where $a\neq0$ is convergent if $|r|<1$ and its sum is $\frac{a}{1-r}$  

When a geometric series does not start with $n=0$,  
$\sum\limits_{n=K}\limits^\infin ar^n=ar^K+ar^{K+1}+ar^{K+2}+...+ar^{K+n}$  
$\sum\limits^\infin\limits_{n=K}(ar^K)r^n=\frac{ar^K}{1-r} \ \longrightarrow\  Sum=\frac{First\ Term}{1-r}$  

$\sum\limits_{n=0}\limits^\infin ar^n=a+ar+ar^2+...+ar^n$   
where $a\neq0$ is divergent if $|r|>1$  

**Telescoping Series**  
Telescoping series can be expressed in the form $\sum\limits^\infin\limits_{n=1} (a_n-a_{n+m})$ for some $m$.  

Let $S_N$ be the partial sum of a telescoping series.  
As $N\rightarrow\infin$, we get $\sum\limits^\infin\limits_{n=1} (a_n-a_{n+m})= \lim\limits_{N\rightarrow\infin} \ \sum\limits^N\limits_{n=1} (a_n-a_{n+m})= \lim\limits_{N\rightarrow\infin} S_N$.  
For $N>m>0$, if the limit $\lim\limits_{N\rightarrow\infin} a_n=L$ exists, partial sum $S_N=\sum\limits^m\limits_{n=1}a_n-mL$.  

**Harmonic Series**  
Harmonic series is $\sum\limits^\infin\limits_{n=1} \frac1n=1+\frac12 +\frac13+...+\frac1n$.  

Taking partial sums $S_N$ of the series,  
$S_1=1$  
$S_2=1+\frac12$  
$S_4=1+\frac12 +\big(\frac13+\frac14\big)$  
$S_4\ge1+\frac12 +\big(\frac14+\frac14\big) =1+2\big(\frac12\big)$  
$S_8=1+\frac12 +\big(\frac13+\frac14\big) +\big(\frac15+\frac16+\frac18+\frac18\big)$  
$S_8\ge1+\frac12 +\big(\frac14+\frac14\big) +\big(\frac18+\frac18 +\frac18+\frac18\big) =1+3\big(\frac12\big)$  

Thus, $S_{2^n}\ge1+\frac n2$. Hence, $\lim\limits_{n\rightarrow\infin}S_N=\infin$. The harmonic series is divergent.  

**Alternating Series**  
Alternating series $\sum\limits^\infin\limits_{n=1} (-1)^{n-1}\cdot b_n= b_1-b_2+b_3-b_4+...$ where $b_n>0$  
If $\lim\limits_{n\rightarrow\infin}b_n=0$ and $b_{n+1}\le b_n$ for all $n$ (non-increasing), then the series converges.  

**P-series**  
A p-series $\sum\limits^\infin\limits_{n=1}\frac1{n^p}=1+\frac1{2^p}+\frac1{3^p}+...+\frac1{n^p}$ converges if $p>1$, and diverges if $p\le 1$.  

### Properties of Series

**Convergent Series**  
If $\sum a_n$ and $\sum b_n$ are convergent series, the following applies,  
$\sum ca_n=c\sum a_n$  
$\sum(a_n+b_n)=\sum a_n+\sum b_n$  
$\sum(a_n-b_n)=\sum a_n-\sum b_n$  

**Divergent Series**  
Every non-zero constant multiple of a divergent series is divergent.  
For example, a series $c\sum a_n$ is divergent if $\sum a_n$ is divergent, regardless of $c$.  

If $\sum a_n$ converges and $\sum b_n$ diverges, then $\sum(a_n\pm b_n)$ diverges.  
For example, the series $\sum\limits^\infin\limits_{n=1} \big(\frac13\big)^n+\frac{179}n$ is divergent since $\sum\limits^\infin\limits_{n=1}\frac{179}n$ is divergent.  

### **Divergence Test**

If a series $\sum\limits^\infin\limits_{n=0}a_n$ converges, then $\lim\limits_{n\rightarrow\infin}a_n=0$.  
If $\lim\limits_{n\rightarrow\infin}a_n=0$, it does not imply that the series is convergent.  
If $\lim\limits_{n\rightarrow\infin}a_n$ does not exist or $\lim\limits_{n\rightarrow\infin}a_n\ne0$, the series is divergent.  

### Integral Test

Suppose $a_n=f(n)$ where $f$ is a positive, continuous, decreasing function of $x$.  
If the integral $\int^\infin_N\ f(x)\ dx$ converges, the series $\sum\limits^\infin\limits_{N}a_n$ converges.  

For example, $f$ satisifies the conditions on the interval $[1,\infin)$, then if $\int^\infin_1\ f(x)\ dx$ converges, the series converges. Integral converges if its limit $\lim\limits_{c\rightarrow\infin}\ \int^c_N\ f(x)\ dx$ exist.  

### Comparison Test

Suppose that $\sum a_n$ and $\sum b_n$ are two series with positive terms.  
If $a_n\le b_n$ and $\sum b_n$ is convergent, then $\sum a_n$ is also convergent.  
If $a_n\ge b_n$ and $\sum b_n$ is divergent, then $\sum a_n$ is also divergent.  

**Limit Comparison Test**  
Suppose that $a_n>0$ and $b_n>0$ for all $n\ge N$, where $N$ is some integer.  
If $\lim\limits_{n\rightarrow\infin} \frac{a_n}{b_n}>0$ then both series either converge or diverge.  
If $\lim\limits_{n\rightarrow\infin} \frac{a_n}{b_n}=0$ and $\sum b_n$ converges, then $\sum a_n$ converges.  
If $\lim\limits_{n\rightarrow\infin} \frac{a_n}{b_n}=\infin$ and $\sum b_n$ diverges, then $\sum a_n$ diverges.  

### Type of Convergence

**Aboslute Convergence**  
A series $\sum a_n$ is said to be absolutely convergent if the series of its absolute values  
 $\sum |a_n|$ is convergent. If $a_n\ge 0$, then $|a_n|=a_n$. Thus, if $\sum a_n$ is a series with   
non-negative terms, then absolute convergence is the same as convergence.  

**Conditional Convergence**  
When $\sum |a_n|$ diverges, then $\sum a_n$ may either converge or diverge.  
If $\sum a_n$ is convergent, then the series is conditionally convergent.  
If $\sum a_n$ is divergent, then both $\sum |a_n|$ and $\sum a_n$ diverge.  

### Ratio Test

If $\lim\limits_{n\rightarrow\infin} \big|\frac{a_{n+1}}{a_n}\big| <1$ , the series $\sum a_n$ is absolutely convergent.  
If $\lim\limits_{n\rightarrow\infin} \big|\frac{a_{n+1}}{a_n}\big| >1$ or $\lim\limits_{n\rightarrow\infin} \big|\frac{a_{n+1}}{a_n}\big| =\infin$, both $\sum |a_n|$ and $\sum a_n$ diverges.  
If $\lim\limits_{n\rightarrow\infin} \big|\frac{a_{n+1}}{a_n}\big| =1$, the ratio test is inconclusive.  

### Root Test

If $\lim\limits_{n\rightarrow\infin} \sqrt[n]{|a_n|} <1$ , the series $\sum a_n$ is absolutely convergent.  
If $\lim\limits_{n\rightarrow\infin} \sqrt[n]{|a_n|} >1$ or $\lim\limits_{n\rightarrow\infin} \sqrt[n]{|a_n|} =\infin$, both $\sum |a_n|$ and $\sum a_n$ diverges.  
If $\lim\limits_{n\rightarrow\infin} \sqrt[n]{|a_n|}=1$, the ratio test is inconclusive.  

## Power Series

A power series about $x=0$ is a series of the form:  
$\sum\limits^\infin\limits_{n=1} c_nx^n =c_0 +c_1x +c_2x^2 +...+c_nx^n+...$  

A power series about $x=a$ is a series of the form:  
$\sum\limits^\infin\limits_{n=1} c_nx^n =c_0 +c_1(x-a) +c_2(x-a)^2 +...+c_n(x-a)^n+...$  

A power series can be differentiated/integrated term by term to obtain another series.  

### Radius of Convergence

For a given power series, there are only three possibilities:  
- Converges absolutely for all $x$ *(Radius of convergence *$R=\infin$*)*
- Converges only at one point $x=a$ and diverges elsewhere *(*$R=0$*)*
- Series converges if $|x-a|<R$ and diverges if $|x-a|>R$
  *where *$R$* is a positive real number*  

The interval of convergence is the set of all values of $x$ for which the series converges.  
- When $R=\infin$, interval of convergence is $(-\infin,\infin)$
- When $R=0$, interval of convergence is $\{a\}$
- When $R$ is a positive real number, $(a-R, a+R)$ or $[a-R, a+R]$
  *The brackets used is dependent on whether the series converges at that point.  
  Open brackets if divergent and square brackets if convergent.*  

### Taylor and Maclaurin Series

Talyor series of a function $f(x)$ at $a$ is given by the power series:  
$\sum\limits^\infin\limits_{n=0} \frac{f^n(a)}{n!}(x-a)^n= f(a)+\frac{f^1(a)}{1!}(x-a)^1+ \frac{f^2(a)}{2!}(x-a)^2+... +\frac{f^n(a)}{n!}(x-a)^n$  

The Maclaurin series of a function $f(x)$ is the power series centered at $a=0$:  
$\sum\limits^\infin\limits_{n=0} \frac{f^n(0)}{n!}x^n= f(0)+\frac{f^1(0)}{1!}x^1+ \frac{f^2(0)}{2!}x^2+... +\frac{f^n(0)}{n!}x^n$  

**Taylor Remainder**  
$f(x)-T_n(x)=R_n(x)$ where $R_n$ is the Taylor remainder  
$f(x)-T_n(x)=\frac{f^{n+1}(c)}{(n+1)!}(x-a)^{n+1}$  
$R_n(x)=\frac{f^{n+1}(c)}{(n+1)!}(x-a)^{n+1}$  

If $\lim\limits_{n\rightarrow\infin} R_n(x)=0$, then $f(x)$ is equal to the sum of its Taylor series.  

### Standard Power Series

$\frac1{1-x}=1+x+x^2+x^3+...$  
$e^x=1+x +\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!}+...$  
$ln(1+x) =x-\frac{x^2}2 +\frac{x^3}3-\frac{x^4}4+...$  
$sin\ x=x-\frac{x^3}{3!} +\frac{x^5}{5!}-\frac{x^7}{7!}+...$  
$cos\ x=1-\frac{x^2}{2!} +\frac{x^4}{4!}-\frac{x^6}{6!}+...$  

## First Order Differential Equations

### Differential Equations

**Separable Differential Equation**  
A separable first-order differential equation is where expressions of $x$ and $y$ are separable.  
$p(y)\ y'=q(x)$  
$p(y)\cdot\frac{dy}{dx}=q(x)$  
$\int p(y)\ dy=\int q(x)\ dx$  

Alternative form of a separable first-order differential equation.  
$\frac{dy}{dx}=f(x)\cdot g(y)$  
$\frac1{g(y)}\cdot\frac{dy}{dx}=f(x)$  
$\int\frac1{g(y)}\ dy =\int f(x)\ dx$ *(if *$g(y)\ne0$*)*  

**Linear Differential Equation**  
A first-order linear differetial equation can be written in the form,  
$a(x)\cdot\frac{dy}{dx}+b(x)\cdot y=r(x)$  
*If the coefficient of *$\frac{dy}{dx}=1$*, the equation is in standard form.*  

To solve linear equations, reduce the equation to its standard form.  
$\frac{dy}{dx}+P(x)\cdot y=Q(x)$  
$v(x)\cdot\frac{dy}{dx}+P(x)v(x)\cdot y=v(x)Q(x)$ *(Multiplying by *$v$*)*  
$\frac{d}{dx}\big[v(x)\cdot y\big]=v(x)Q(x)$  
$v(x)\cdot y=\int v(x)Q(x)\ dx$ *(Integrating with respect to *$x$*)*  
$y=\frac1{v(x)}\int v(x)Q(x)\ dx$ *(where *$v$* is the integrating factor)*  

$\frac{d}{dx}\ vy= v\frac{dy}{dx}+Pvy$  
$v\frac{dy}{dx}+y\frac{dv}{dx}= v\frac{dy}{dx}+Pvy$  
$\frac{dv}{dx}=Pv$  
$\int\frac1v\ dv=\int P\ dx$  
$v=e^{\ \int P\ dx}$  
*where *$v(x)$* is the integrating factor*  

### Reduction to First O.D.E.

**Missing **$y$**-variable**  
Suppose $y$ is missing from a differential equation, $\frac{d^2y}{dx^2} =\frac1x\big(\frac{dy}{dx} +x^2cosx\big)$.  
The derivatives can be substituted with $z=\frac{dy}{dx}$ and $z'=\frac{d^2y}{dx^2}$.  
This reduces the O.D.E. to $z'=\frac1x(z+x^2cos)$.  
The equation can be solved as a linear equation.  
*Since *$z=\frac{dy}{dx}$*, the solution needs to be integrated again to obtain an expression for *$y$*.*  

**Missing **$x$**-variable**  
Suppose $x$ is missing from a differential equation, $\frac{d^2y}{dx^2} =-\frac2{1-y} \big(\frac{dy}{dx}\big)^2$.  
Let $z=\frac{dy}{dx}$ and $z'=\frac{d}{dx} \big(\frac{dy}{dx}\big)= \big(\frac{d}{dy} \cdot\frac{dy}{dx}\big) \big(\frac{dy}{dx}\big)= \frac{dz}{dy}\cdot z$.  
This reduces the O.D.E to $z\frac{dz}{dy} =\big(-\frac2{1-y}\big)z^2$.  
The equation can be solved as a linear equation.  

### Types of Differential Equations

**Homogeneous Differential Equation**  
A function $f(x,y)$ is homogeneous if $f(tx,ty)$ can be reduced back to $f(x,y)$.  

For a homogeneous equation, $x$ and $y$ can be replaced with a single variable $V$,   
where $V=\frac{y}{x}$. The function then becomes $y=Vx$ where $\frac{dy}{dx}=x\frac{dV}{dx}+V$.   
Substitute the new variable and its derivative into the equation and solve.  

**Bernoulli Differential Equation**  
A bernoulli equation is in the form,  
$\frac{dy}{dx}+p(x)\cdot y =q(x)\cdot y^{\alpha}$  
*If *$\alpha=0$*, it becomes a linear equation.  
If *$\alpha=1$*, the equation is separable and linear.*  

Dividing both sides of the equation by $y^\alpha$,  
$y^{-\alpha}\frac{dy}{dx}+y^{1-\alpha}\cdot p(x)=q(x)$  

Let $u=y^{1-\alpha}$.  
$\frac{du}{dx}= \frac{du}{dy}\cdot\frac{dy}{dx}$  
$\frac{du}{dx}=(1-\alpha)y^{-\alpha}\frac{dy}{dx}$  
$y^{-\alpha}\frac{dy}{dx} =\frac1{1-\alpha}\frac{du}{dx}$  

Substituting back into the equation,  
$\frac1{1-\alpha}\frac{du}{dx} +u\cdot p(x)=q(x)$  
$\frac{du}{dx}+(1-\alpha)u\cdot p(x)=(1-\alpha)\cdot q(x)$  
*The equation can be rearranged into standard form and solved.*  

**Exact Differential Equation**  
For a differential equation in the form $M(x,y)\ dx+N(x,y)\ dy=0$,   
it is exact if there exist a function $u(x,y)$ for which $\frac{\partial u}{\partial x}=M$ and $\frac{\partial u}{\partial y}=N$.  
The function $u(x,y)$ is thus the potential function (general solution).  
A differential equation is exact if and only if $\frac{\partial M}{\partial y} =\frac{\partial N}{\partial x}$.  

A non-exact equation can be transformed to an exact equation by multiplying   
it with a non-zero function $I(x,y)$, such that the equation becomes,  
$I(x,y)M(x,y)\ dx+I(x,y)N(x,y)\ dy=0$  
$\frac{\partial}{\partial y} \ I(x,y)M(x,y)= \frac{\partial}{\partial x} \ I(x,y)N(x,y)$  
*where *$I(x,y)$* is the integrating factor*  

## Second Order Differential Equations

### Homogeneous Linear Differential Equation

A homogeneous linear differential equation with constant coefficients is in the form,  
$a\frac{d^2y}{dx^2}+b\frac{dy}{dx}+cy=0$ *where the coefficients are real constants*  

The coefficients form a quadratic equation called the characteristic equation. Solving   
the characteristic equation gives the general solution of the differential equation.  
$a\lambda^2+b\lambda+c=0$  
$\lambda=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$  

If $b^2-4ac>0$, then the quadratic equation has two distinct real roots.  
If $b^2-4ac=0$, then the quadratic equation has a repeating real root.  
If $b^2-4ac<0$, then the quadratic equation has two complex conjugate roots.  

| Real & Distinct Roots | $y=c_1e^{\lambda_1x} +c_2e^{\lambda_2x}$ |
| --- | --- |
| Repeating Roots | $y=c_1e^{\lambda_0x} +c_2xe^{\lambda_0x}$ |
| Complex Roots | $y=e^{\alpha x}(c_1sin\beta x +c_2cos\beta x)$ *where *$\alpha$* is real, *$\beta$* is complex* |

### Non-Homogeneous Linear Differential Equation

A non-homogeneous linear differential equation is in the form,  
$a\frac{d^2y}{dx^2}+b\frac{dy}{dx}+cy=F(x)$ *where *$F(x)$* is continuous on interval *$I$  

The associated homogeneous equation is in the form,  
$a\frac{d^2y}{dx^2}+b\frac{dy}{dx}+cy=0$  

Let $y_h$ be the general solution to the associated homogeneous equation.  
Let $y_p$ be a particular solution to the non-homogeneous equation.  
Thus, the general solution is $y=y_h+y_p$.  

**Method of Undetermined Coefficients**  
$F(x)$ must contain the following expressions for this method:  
- Polynomials
- Consines or sines
- Exponential function
- Sums or products of the above
*The expressions stated above have derivatives (are differentiable).*  

Step 1:     Choose a form of $y_p$ similar to an expression in $F(x)$  
Step 2:     Check whether $y_p$ is the same solution as $y_h$  
Step 3:     Differentiate $y_p$ and substitute into non-homogeneous equation  

**Method of Variation of Parameters**  
Suppose the general solution to the associated homogeneous equation is,  
$y_h=c_1y_1+c_2y_2$  

Replacing the coefficients $c_1$ and $c_2$ with $u_1$ and $u_2$ (functions of $x$),  
$y_p=u_1y_1+u_2y_2$  

Impose the condition $u_1'y_1+u_2'y_2=0$.  
Differentiate $y_p$ to obtain expressions for $y_p'$ and $y_p''$.  
Substitute $y_p$, $y_p'$ and $y_p''$ into the non-homogeneous equation.  

The two simultaneous equations are then,  
$u_1'y_1+u_2'y_2=0$  
$y_p''+y_p'+y_p=F(x)$  
