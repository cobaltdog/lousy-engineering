# MA2006 - Formulae

> MA2006 · ENGINEERING MATHEMATICS — exported from Lousy Engineering

---

## Linear Algebra

### System of Linear Algebraic Equations

A system of $N$ linear algebraic equations in $N$ unknowns is in the form:  
$a_{11}x_1+a_{12}x_2+a_{13}x_3 +...+a_{1N}x_N=b_1\\ a_{21}x_1+a_{22}x_2+a_{23}x_3 +...+a_{2N}x_N=b_2\\ \vdots\\ a_{N1}x_1+a_{N2}x_2+a_{N3}x_3 +...+a_{NN}x_N=b_N$  
*where *$a_{ij}$* is the coefficient of the unknown *$x_j$* and *$b_i$* is the constant term*  

Consider a single linear algebraic equation $c_1x_1+c_2x_2+...+c_Nx_N=d_N$.  
$\begin{bmatrix} x_1\\x_2\\ \vdots\\x_N \end{bmatrix} =\begin{bmatrix} \alpha_1\\\alpha_2\\ \vdots\\\alpha_N \end{bmatrix}$  
is a solution of the equation if $LHS=RHS$ after substituting the values of $\alpha_1$, $\alpha_2$, … $\alpha_N$ into the linear algebraic equation.  

If it is a solution of each and every linear algebraic equation   
in a system, then it is said to be a solution of that system.  

If a system of linear algebraic equations has no solution, it is said to be inconsistent. If a system has either a unique solution or infinitely many solutions, it is said to be consistent.  

**Legitimate Row Operations**  
To solve a system of linear algebraic equations, express it   
as an upper triangular matrix, which is in the form shown   
on the right. This is achieved through row operations.  

$\begin{bmatrix} 1&4&5&6\\ 0&1&6&8\\ 0&0&2&0\\ 0&0&0&3 \end{bmatrix}$  
There are two types of legitimate row operations:  
- Interchanging of rows, $R_i\ \leftrightarrow\ R_j$
- Using row $j$ to change row $i$ to become $R_i\ \rightarrow\  \alpha R_i+\beta R_j$

**Homogeneous System**  
A homogeneous system of linear algebraic equations is in the form:  
$a_{11}x_1+a_{12}x_2+a_{13}x_3 +...+a_{1N}x_N=0\\ a_{21}x_1+a_{22}x_2+a_{23}x_3 +...+a_{2N}x_N=0\\ \vdots\\ a_{N1}x_1+a_{N2}x_2+a_{N3}x_3 +...+a_{NN}x_N=0$  
*where *$x=0$* is always a solution of the system, thus it is always consistent*  

The homogeneous system $AX=0$ has either only one (unique) solution   
given by $X=0$ or infinitely many solutions, where one of which is $X=0$.  

### Vector Space

A $N$-th dimensional vector is a well-ordered set   
of $N$ real numbers in the form shown on the right.  

The set of all $N$-th dimensional vectors forms a vector   
space denoted by $R^N$. For example, $R^3$ is the set of all   
three-dimensional vectors.  
$\begin{bmatrix} x_1\\x_2\\\vdots\\x_N \end{bmatrix}$  

**Linearly Dependent Vectors**  
We say that $u$ is a linear combination of $v_1$, $v_2$, …, $v_{k-1}$, and $v_k$ in the form:  
$u=a_1v_1+a_2v_2+... +a_{k-1}v_{k-1} +a_kv_k$  
*where *$a_1$*, *$a_2$*, …, *$a_{k-1}$*, and *$a_k$* are real numbers   
and *$v_1$*, *$v_2$*, …, *$v_{k-1}$*, and *$v_k$* are vectors in *$R^N$  

If any of the vectors can be expressed as a combination   
of the other vectors, the vectors are linearly dependent.  

**Linearly Independent Vectors**  
We say that $w_1$, $w_2$, …, $w_{p-1}$, and $w_{p}$ are linearly independent vectors if we cannot   
find any one of these vectors to be a linear combination of the other vectors.  

To determine whether vectors are linearly independent, form a homogeneous system:  
$c_1w_1+c_2w_2+... +c_{p-1}w_{p-1}+c_pw_p=0$  

If $c_1=c_2=...=c_p=0$ is the only solution, the vectors are linearly independent.  
*If we can find *$c_1\ne0$*, then the relation becomes *$w_1= -\frac{c_2}{c_1}w_2 -\frac{c_3}{c_1}w_3-... -\frac{c_p}{c_1}w_p$*.   
That is, *$w_1$* can be expressed as a linear combination of *$w_2$*, *$w_3$*, …, *$w_{p-1}$* and *$w_p$*.*  

### Inverse of a Square Matrix

$B$ is said to be an inverse of $A$ if the relation $AB=BA=I$ is true.  
*If a square matrix *$A$* has an inverse, it can only have one inverse matrix.  
If *$A$* has an inverse, *$A$* is invertible, with the inverse of *$A$* denoted by *$A^{-1}$*.*  

To determine whether $A$ is invertible:  
- Form the tableau $A\mid I$
- Perform legitimate row operations
- Reduce $A\mid I$ to the form $I\mid V$ (if possible)
*If *$A$* can be reduced to *$I$* via row operations, then *$V$* is the inverse of *$A$*.  
If *$A$* cannot be reduced to *$I$*, then *$A$* is not invertible.*  

Consider the system $AX=B$. If $A^{-1}$ exits, then we can write:  
$A^{-1}AX=A^{-1}B\\ IX=A^{-1}B\\ X=A^{-1}B$  
*If the inverse of *$A$* is known, it can be used to find the unique solution of the system.*  

$A$ and $B$ are $N\times N$ matrices which are invertible. Show that $({AB})^{-1}=B^{-1}A^{-1}$.  
$(AB)(B^{-1}A^{-1}) =A(BB^{-1})A^{-1} =AIA^{-1}=AA^{-1}=I$  
*Multiplying the original matrix with its inverse should return *$I$*.*  

### Determinant of a Square Matrix

**Determinant of a Square Matrix**  
Elements $a_{ij}$ of a matrix $A$ can be used to compute its determinant, $\det(A)$ or $|A|$.  

Calculate $\det(A)$ using the $I$-th row, with elements, $a_{I1}$, $a_{I2}$, …, $a_{Ij}$ and $a_{IN}$.  
$\det(A) =\sum\limits^{N}\limits_{j=1} \ \ (-1)^{I+j} \ \cdot\ a_{Ij} \ \cdot\ det(A_{Ij})$  
*where *$det(A_{Ij})$* is a matrix obtained by removing the *$I$*-th row and *$j$*-th column*  

Calculate $\det(A)$ using the $J$-th column, with elements $a_{1J}$, $a_{2J}$, …, $a_{iJ}$ and $a_{NJ}$.  
$\det(A) =\sum\limits^{N}\limits_{i=1} \ \ (-1)^{i+J} \ \cdot\ a_{iJ} \ \cdot\ det(A_{iJ})$  
*where *$\det(A_{iJ})$* is a matrix obtained by removing the *$i$*-th row and *$J$*-th column*  

Untitled  

**Determinant of a Triangular Matrix**  
The determinant of a triangular matrix is the product of all the diagonal elements.  

$\det\begin{bmatrix} u_{11}&u_{12}&u_{13}&u_{14}&u_{15} \\0&u_{22}&u_{23}&u_{24}&u_{25} \\0&0&u_{33}&u_{34}&u_{35} \\0&0&0&u_{44}&u_{45} \\0&0&0&0&u_{55} \end{bmatrix}$  
$=(-1)^{1+1}\cdot u_{11}\cdot \det\begin{bmatrix} u_{22}&u_{23}&u_{24}&u_{25}\\ 0&u_{33}&u_{34}&u_{35}\\ 0&0&u_{44}&u_{45}\\ 0&0&0&u_{55}\\ \end{bmatrix}$  
$=u_{11}\cdot (-1)^{1+1}\cdot u_{22}\cdot \det\begin{bmatrix} u_{33}&u_{34}&u_{35}\\ 0&u_{44}&u_{45}\\ 0&0&u_{55}\\ \end{bmatrix}$  
$=u_{11}\cdot  u_{22}\cdot u_{33}\cdot u_{44}\cdot u_{55}$  

The determinant of any matrix can be found by reducing it to a triangular matrix.  
When we interchange rows $R_i\ \leftrightarrow\ R_J$: it becomes $-1\cdot\det(A)=\det(U)$  
When we multiply $R_i\ \rightarrow\  \alpha R_i+\beta R_j$: it becomes $\alpha\cdot\det(A)=\det(U)$  
*Note that when row operations are performed, *$\det(A)\ne\det(U)$*. We have to   
trace back the row operations performed and apply the appropriate relation.*  

Determinant $\det(A)\ne0$:  
- Matrix A is invertible
- $AX=B$ has a unique solution
- Diagonal elements of $U$ are non-zero
Determinant $\det(A)=0$:  
- Matrix $A$ does not have an inverse
- $AX=B$ has either no solutions 
or infinitely many solutions

For a homogeneous system where $AX=0$:  
- If $\det(A)\ne0$, then $AX=0$ has a unique solution given by $X=0$
- If $\det(A)=0$, then $AX=0$ has infinitely many solutions
*Computing the determinant of a homogeneous system allows us to determine if the   
vectors that make up the system are linearly dependent or independent based on   
the value of *$\det(A)$*.*  

### Matrix Eigenvalue Problem

Consider multiplying non-zero vectors by a given square matrix,  
$\begin{bmatrix} 6&3\\4&7 \end{bmatrix} \begin{bmatrix} 5\\1 \end{bmatrix} = \begin{bmatrix} 33\\27 \end{bmatrix}$ and $\begin{bmatrix} 6&3\\4&7 \end{bmatrix} \begin{bmatrix} 3\\4 \end{bmatrix} = \begin{bmatrix} 30\\40 \end{bmatrix} = 10\begin{bmatrix} 3\\4 \end{bmatrix}$  

In the second example, the multiplication produces a new vector which has the   
same direction as the original vector, only differing by an eigenvalue $\lambda=10$.  

The problem of systematically finding $\lambda$ and non-zero vectors for a given square   
matrix is known as the matrix eigenvalue problem, which can be expressed as,  

$AX=\lambda X=\lambda IX$  
$AX-\lambda IX=0$  
$(A-\lambda I)X=0$  
*The equation is in the form of a homogeneous   
system of algebraic equations. Thus, to obtain   
solutions that is not *$X=0$*, the determinant   
must be *$\det(A-\lambda I)=0$*.*  

If matrix $A$ is a $N\times N$ matrix, it can have up to $N$ distinct eigenvalues.  
Solving the determinant, in the form of a polynomial, gives the values of $\lambda$.  
Substituting $\lambda$ back into the homogeneous system gives the eigenvectors.  

### Diagonalization of a Square Matrix

Given an $N\times N$ matrix $A$, can we find an invertible $N\times N$ matrix $P$ and an $N\times N$ diagonal matrix $D$ such that,  

$A=PDP^{-1}$  
$P^{-1}AP=D$  
$D=\begin{bmatrix} 1&0&0&0&0\\ 0&2&0&0&0\\ 0&0&3&0&0\\ 0&0&0&4&0\\ 0&0&0&0&5 \end{bmatrix}$  

Matrix $A$ can be diagonalized if and only if it has $N$ linearly dependent eigenvectors.  
Suppose $A$ has linearly dependent eigenvectors $X_1$, $X_2$, …, $X_{N-1}$, and $X_N$.  

$P=\begin{bmatrix} X_1&X_2&...&X_{N-1}&X_N \end{bmatrix}$  
*where the matrix contains the eigenvectors*  
$D= \begin{bmatrix} \lambda_1&0&0&0&0\\ 0&\lambda_2&0&0&0\\ 0&0&\ddots&0&0&\\ 0&0&0&\lambda_{N-1}&0\\ 0&0&0&0&\lambda_N \end{bmatrix}$  
*where the diagonal elements are the eigenvalues*  

**Matrix of a Higher Power**  
If matrix $A$ can be diagonalized, we can compute $A^M$ for higher power $M$.  
$A^5 =PDP^{-1}\cdot  PDP^{-1}\cdot  PDP^{-1}\cdot  PDP^{-1}\cdot  PDP^{-1}$  
$A^5=PDIDIDIDIDP^{-1}$  
$A^5=PD^5P^{-1}$  

In general, $A^M=PD^MP^{-1}$.  

**Diagonalization of a Symmetric Matrix**  
If $A$ is an $N\times N$ symmetric matrix whose elements are real numbers, then it   
has real eigenvalues. If the symmetric matrix has $N$ distinct eigenvalues with   
unit norm eigenvectors, then we can form a matrix $P$ such that $P^{-1}=P^T$.  

The norm of a vector $X$ is denoted by $||X||=\sqrt{{x_1}^2+{x_2}^2 +...+{x_N}^2}$.  
The diagonalization equation becomes $A=PDP^T$.  

## Vector Calculus

### Parametric Equations

#### Equation of a Plane

Let $P=(x_0,\ y_0,\ z_0)$ be a fixed point on a plane.  
Let $Q=(x,\ y,\ z)$ be a general point on a plane.  
The normal vector of the plane is $\bold u=(a,\ b,\ c)$.  
The vector $\bold{PQ}$ is perpendicular to $\bold u$ such that $\bold{PQ}\cdot\bold u=0$.  
The equation of the plane is $ax+by+cz=d$, where $d$ is a constant.  

Consider the plane $x+2y+3z=6$.  
Let $z=t$ and $y=s$, where $t$ and $s$ are arbitrary numbers.  

The parametric equations of the plane are then,  
$x=6-2s-3t\\ y=s\\ z=t$  

In general, the parametric equations are,  
$x=\alpha_1s+\beta_1u+\gamma_1\\ y=\alpha_2s+\beta_2u+\gamma_2\\ z=\alpha_3s+\beta_3u+\gamma_3$  
*where *$x$*, *$y$*, and *$z$* are expressed as linear functions*  

#### Equation of a Surface

Points on a surface in 3D space can be represented by $F(x,\ y,\ z)=d$.  

The surface may be described using parametric equations where   
the coordinates of its points are given by functions of $s$ and $u$.  
$x=f(s,\ u)\\ y=g(s,\ u)\\ z=h(s,\ u)$  
*If the above functions are linear, they describe a plane.*  

Express the surface $(x-1)^2+(y-2)^2+(z-3)^2=16$ in parametric form.  
Let $\rho=z-3$.  

$(x-1)^2+(y-2)^2=16-\rho^2$  
Since the $LHS$ is always positive, $-4\le\rho\le4$.  

Using the trigonometric identity,  
$(sin\theta)^2+(cos\theta)^2=1$  
$(asin\theta)^2+(acos\theta)^2=a^2$  

Let $a=\sqrt{16-\rho^2}$.  
$x-1=\sqrt{16-\rho^2}sin\theta$  
$y-2=\sqrt{16-\rho^2}cos\theta$  

The parametric equations are then,  
$x=1+\sqrt{16-\rho^2}sin\theta\\ y=1+\sqrt{16-\rho^2}cos\theta\\ z=\rho+3$  

#### Equation of a Line

Let $P=(x_0,\ y_0,\ z_0)$ and $R=(x_1,\ y_1,\ z_1)$ be two points on a line.  
Let $Q=(x,\ y,\ z)$ be a general point on the same line.  
$\bold{PR} =(x_1-x_0,\ y_1-y_0, z_1-z_0)$  
$\bold{PQ}=(x-x_0,\ y-y_0,\ z-z_0)$  

Since the vectors are parallel, $\bold{PQ}=t\bold{PR}$.  
$(x-x_0,\ y-y_0,\ z-z_0) =t(x_1-x_0,\ y_1-y_0, z_1-z_0)$  

The parametric equations for the line are then,  
$x=x_0+t(x_1-x_0)\\ y=y_0+t(y_1-y_0)\\ z=z_0+t(z_1-z_0)$  
*where *$(x,\ y,\ z)$*is a general point on the line,   
*$(x_0,\ y_0,\ z_0)$* is a given point on the line, and  
*$(x_1-x_0,\ y_1-y_0,\ z_1-z_0)$* is a vector parallel to the line*  

#### Equation of a Curve

All points on a curve in 3D space can expressed in parametric form.  
$x=F(s)\\ y=G(s)\\ z=H(s)$  
*If the above functions are linear, they describe a line.*  

### Vector Differential

A vector function $\bold F$ of one variable $u$ is in the form:  
$\bold F(u)=p(u)\bold i +q(u)\bold j+r(u)\bold k$  
$\bold F(u) =\Big[p(u),\ q(u),\ r(u)\Big]$  

**Differentiation of a Vector**  
Let $a$ be a scalar function of $x$.  
Let $\bold G=p(x)\bold i +q(x)\bold j+r(x)\bold k$.  
Determine the derivative of $\frac{d}{dx}\  a\bold G$.  

$\frac{d}{dx}\ a\bold G =\Big[ \frac{d}{dx}\ ap,\  \frac{d}{dx}\ aq,\  \frac{d}{dx}\ ar \Big]$  
$\frac{d}{dx}\ a\bold G =\Big[ a\frac{dp}{dx}+p\frac{da}{dx},\  a\frac{dq}{dx}+q\frac{da}{dx},\  a\frac{dr}{dx}+r\frac{da}{dx} \Big]$  
$\frac{d}{dx}\ a\bold G= a\Big[ \frac{dp}{dx},\  \frac{dq}{dx},\  \frac{dr}{dx} \Big] +\frac{da}{dx} \Big[ p,\ q,\ r \Big]$  
$\frac{d}{dx}\ a\bold G =a\frac{d\bold G}{dx} +\bold G\frac{da}{dx}$  
*The derivative of a scalar multiplied with a vector gives the product rule.*  

**Differentiation of Dot Product of Vectors**  
Let $\bold F(t)=p(t)\bold i +q(t)\bold j+r(t)\bold k$.  
Let $\bold G(t)=u(t)\bold i +v(t)\bold j+w(t)\bold k$.  
Determine the derivative of $\frac{d}{dt}\  \bold F\cdot\bold G$.  

$\frac{d}{dt}\ \bold F\cdot\bold G =\frac{d}{dt}\ pu+qv+rw$  
$\frac{d}{dt}\ \bold F\cdot\bold G =\frac{d}{dt}\ pu +\frac{d}{dt}\ qv +\frac{d}{dt}\ rw$  
$\frac{d}{dt}\ \bold F\cdot\bold G =p\frac{du}{dt}+u\frac{dp}{dt} +q\frac{dv}{dt}+v\frac{dq}{dt} +r\frac{dw}{dt}+w\frac{dr}{dt}$  
$\frac{d}{dt}\ \bold F\cdot\bold G =\Big[p,\ q,\ r\Big]\cdot\Big[ \frac{du}{dt},\  \frac{dv}{dt},\  \frac{dw}{dt}\Big] +\Big[u,\ v,\ w\Big]\cdot\Big[ \frac{dp}{dt},\  \frac{dq}{dt},\  \frac{dr}{dt}\Big]$  
$\frac{d}{dt}\ \bold F\cdot\bold G =\bold F\cdot\frac{d\bold G}{dt} +\bold G\cdot\frac{d\bold F}{dt}$  
*The derivative of a vector dot product gives the product rule.*  

**Directional Derivative**  
Unit vector $\bold u=\frac{\bold v}{|\bold v|}$  
$\frac{d}{dt}\ f(x,\ y,\ z) =\nabla f\cdot\bold u$  
$\frac{d}{dt}\ f(x,\ y,\ z) =\frac{\partial f}{\partial x} \cdot u_1 +\frac{\partial f}{\partial y} \cdot u_2 +\frac{\partial f}{\partial z} \cdot u_3$  
At a point $(a,\ b,\ c)$, directional derivative is the rate of change of $f$ in the direction $\bold u$.  

**Vector Functions**  
The $\nabla$ operator is also called the $grad()$ function.  
$\nabla f(x,\ y,\ z) =\Big[ \frac{\partial f}{\partial x},\  \frac{\partial f}{\partial y},\  \frac{\partial f}{\partial z}\Big]$  

The $\nabla\cdot$ operator is also called the $div()$ function.  
$\nabla\cdot\bold F=\Big[ \frac{\partial}{\partial x},\  \frac{\partial}{\partial y},\  \frac{\partial}{\partial z}\Big] \cdot\Big[p,\ q,\ r\Big] =\frac{\partial q}{\partial x} +\frac{\partial r}{\partial y} +\frac{\partial s}{\partial z}$  

The $\nabla\times$ operator is also called the $curl()$ function.  
$\nabla\times\bold F=\Big[ \frac{\partial}{\partial x},\  \frac{\partial}{\partial y},\  \frac{\partial}{\partial z}\Big] \times\Big[p,\ q,\ r\Big]$  
$\nabla\times\bold F=\Big[ \frac{\partial r}{\partial y} -\frac{\partial q}{\partial z},\  \frac{\partial p}{\partial z} -\frac{\partial r}{\partial x},\  \frac{\partial q}{\partial x} -\frac{\partial p}{\partial y}  \Big]$  
*Cross product determined using the shortcut method for determinant of a *$3\times3$* matrix.*  

The $\nabla\cdot\nabla$ operator (scalar) is also known as the Laplacian operator.  
$\nabla\cdot\nabla=\nabla^2 =\frac{\partial^2}{\partial x^2} +\frac{\partial^2}{\partial y^2} +\frac{\partial^2}{\partial z^2}$  

### Vector Integral

**Double Integral (Polar Coordinates)**  
$\iint_R dA =\iint_R rdrd\theta$  
Express $x$ and $y$ as $x=rcos\theta$ and $y=rsin\theta$.  

**Line Integral**  
Consider the integral of a curve $C$ in a 2D space.  
$\int_C\ f(x,y,z)\ ds$ can be computed by expressing $f$ in parametric equations.  
$ds=\sqrt{ \Big(\frac{dx}{dt}\Big)^2 +\Big(\frac{dy}{dt}\Big)^2 +\Big(\frac{dz}{dt}\Big)^2}\ dt$  

**Green’s Theorem**  
Consider the integral of a closed curve $C$ in a 2D space.  
The curve $C$ is assigned an anticlockwise direction (positive).  
$\oint_C\ \big[f(x,y),\ g(x,y)\big] \cdot\big[dx,\ dy\big]$  
$=\oint_C\ f(x,y)dx+g(x,y)dy$  
$=\iint_R\  \frac{\partial g}{\partial x} -\frac{\partial f}{\partial y} \ dA$  
*The closed integral can be evaluated as a double integral.*  

Consider a 2D force field $\bold F=f(x,y)\bold i +g(x,y)\bold j$.  
The 2D force field is said to be conservative if $\frac{\partial g}{\partial x} =\frac{\partial f}{\partial y}$.  
If it is conservative, then $\nabla\phi=\bold F$ where $\phi(x,y)$ is the potential function of $\bold F$.  

**Surface Integral**  
If the equation of surface $S$ can be written in the form $z=f(x,y)$,  
$d\sigma=\sqrt{1+\Big( \frac{\partial f}{\partial x} \Big)^2+\Big( \frac{\partial f}{\partial y} \Big)^2}\ dA$  
*The surface is projected onto the *$xy$*-plane where *$z=0$*.*  

If the equation of surface $S$ can be written in the form $x=f(y,z)$,  
$d\sigma=\sqrt{1+\Big( \frac{\partial f}{\partial y} \Big)^2+\Big( \frac{\partial f}{\partial z} \Big)^2}\ dA$  
*The surface is projected onto the *$yz$*-plane where *$x=0$*.*  

**Flux across a Surface**  
Let $\bold u(x,y,z)$ be a vector field, $S$ be a surface, and $\bold n$ be the unit normal vector.  
Flux across the surface in the direction of $\bold n$ is $\iint_S\  \bold u(x,y,z) \cdot\bold n\ d\sigma$.  

**Flux across a Closed Surface**  
Consider the flux of the vector field $\bold u(x,y,z)$ across a closed surface $S$   
in the direction of $\bold n$, where $\bold n$ is the outward unit normal vector to $S$.  
$\iint_S\ \bold u \cdot\bold n\ d\sigma =\iiint_T\ \nabla \cdot\bold u\ dV$  
*Total flux can be determined by integrating each surface individually or   
by using the Gauss-Ostrogradski theorem (right-hand side of equation).*  

**Stoke’s Theorem**  
Consider a surface $S$. The edge of $S$ is a simple closed curve $C$.  
Work done by $\bold F$ over the closed curve $C$ is a closed integral.  
$\oint_C\ \bold F\cdot d\bold r =\iint_S\ \bold  (\nabla\times\bold F) \cdot\bold n\ d\sigma$  

Since $C$ is assigned the anticlockwise direction as positive, the direction of $\bold n$, the   
unit normal vector of the surface $S$, is determined using the right-hand screw rule.  
*The normal vector of the surface can be determined using *$\nabla S$*.*  

If a force field $\bold F(x,y,z)$ is such that $\nabla\times\bold F=0$, the force field is conservative.  
If the force field is convservative, then $\nabla\phi=\bold F$.  
